<?php

namespace App\Http\Controllers\API;

use App\Order;

use  App\Models\Palette;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email:rfc,dns',
            'fname' => 'required|string|max:100',
            'lname' => 'required|string|max:100',
            'address' => 'required|string|max:300',
            'apartment' => 'string|max:300',
            'city' => 'required|string|max:100',
            'postcode' => 'required|numeric',
            'goverment' => 'required|string|max:100',
            'country' => 'required|string|max:100',
            'items' => 'required|present|array',
            'items.*.paletteid' => 'required|numeric|exists:App\Models\Palette,id',

            'items.*.palettesize' => 'required|in:"small","large","medium"',
            'items.*.quantity' => 'required|numeric|gt:0',

            ]);

        // app()->setLocale('ar');

        $locale = app()->getLocale();
        if ( $validator->errors()->count()>0)
        {
            return response()->json(['status'=>false,'errors'=>$validator->errors()->all(),__('orderrequest.failed')]);

        }
        $totalprice =$this->totalprice($request->items);
        $request['paymentstatus'] = 'pending';
        $request['totalprice'] = $totalprice['totalprice'];
        $checkoutid =  $this->get_checkout_id($request['totalprice']);
        if($checkoutid)
        {
            $request['paymentid']=$checkoutid->id ;
        }else
        {
            $request['paymentid']='failed transaction';
            $order = Order::create($request->except('items'));
            $retitems = $this->save_order_items($order,$totalprice['baletteitems']);
            return response()->json(['status'=>false,'errors'=>['transaction request failed and we calling you shortly'],__('orderrequest.failed')]);

        }


        $order = Order::create($request->except('items'));
        $retitems = $this->save_order_items($order,$totalprice['baletteitems']);
        $view = view('ajax.form')->with(['checkoutid' => $checkoutid->id , 'orderid' => $order->id])
        ->renderSections();

        return response()->json(['status'=>true,'data'=>$order,'items'=>$retitems,'view'=>$view]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }
    public function totalprice($arr=null)
    {
        $retarr['totalprice']= 0;
        $retarr['items']=[];

        $retarr['baletteitems']=[];
        $key['small']="S_price";
        $key['medium']='M_price';
        $key['large']='L_price';


        foreach ($arr as &$item) {
            $palette =   Palette::find($item['paletteid']);
               if($palette)
               {



                   $price =$palette->toArray()[$key[$item['palettesize']]];
                   $retarr['totalprice']+= $price * $item['quantity'];

                   $palette_items_data['size']=$item['palettesize'];
                   $palette_items_data['price']=strval( $price);
                   $palette_items_data['quantity']=strval($item['quantity']);
                   array_push( $retarr['baletteitems'],$palette_items_data);


                }
        }
        // return $retarr['totalprice'];
        return $retarr;
        return count($arr);

    }

    public function save_order_items ($order=null,$arr=null)
    {
        $retarr=[];
        if($order)
        {
            foreach ($arr as &$palette_items_data)
            {

                    $orderitem= $order->items()->create(['size'=>$palette_items_data['size'],'price'=> $palette_items_data['price'] ,'quantity'=>$palette_items_data['quantity']]);
                    array_push( $retarr,$orderitem);
            }
            return $retarr;
        }
    }

    public function get_checkout_id($price=0)
    {
        if($price>0)
        {
            $url = "https://test.oppwa.com/v1/checkouts";
            $data = "entityId=8a8294174b7ecb28014b9699220015ca" .
                        "&amount=$price" .
                        "&currency=EUR" .
                        "&paymentType=DB";

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                           'Authorization:Bearer OGE4Mjk0MTc0YjdlY2IyODAxNGI5Njk5MjIwMDE1Y2N8c3k2S0pzVDg='));
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);// this should be set to true in production
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $responseData = curl_exec($ch);
            if(curl_errno($ch)) {
                return curl_error($ch);
            }
            curl_close($ch);
            if($responseData )
               $responseData =  json_decode($responseData);
            if( $responseData->result->description=='successfully created checkout')
               return $responseData;
            return null ;
        }else
        {
            return null ;
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
