<template>
  <section>



      <div class="row"  v-if="$i18n.locale == 'en'">
      <div class="col-md-7">
                                                                      <!-- Button trigger modal -->


                                <!-- Modal -->
                                <div    class="modal show" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" show='true'>
                                         <div class="modal-dialog modal-dialog-centered" role="document">
                                                     <div class="modal-content" style="display: contents;">


                                                        <div class="moda-body">
                                                                ss
                                                          <form :action="`/api/payment/${this.id}`" class="paymentWidgets" data-brands="VISA MASTER AMEX"></form>

                                                        </div>



                                                 </div>
                                        </div>
                                 </div>
        <v-form class="form" @submit.prevent="send">
          <v-container>
                            <div   v-if="errors.length > 0 && !message" class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Sorry!</strong> You should check in on some of those fields below.
                                    <br>
                                    <ul >
                                        <li v-for="item in errors " :key="item">
                                            {{ item }}
                                        </li>
                                    </ul>



                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div   v-if=" message.length >0 " class="alert alert-warning alert-dismissible fade show" role="alert">
                                  <h1> Done</h1>

                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>


            <v-row>
              <h4>Contacts information </h4>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
              </v-col>
              <!-- <v-checkbox
                        v-model="form.checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Keep me up to date on news and exclusive offers"
                        required
              ></v-checkbox>-->

              <v-col cols="12" md="6">
                <v-text-field v-model="form.fname" label="First Name" required></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field v-model="form.lname" label="Last Name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.address" label=" Address " required></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.apartment" label="Appartment"></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.city" label="city" required></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="8">
                <v-select v-model="form.country" :items="item" label="country" outlined></v-select>
              </v-col>
              <!-- <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  v-model="form.goverment"

                  item-text="name"
                  item-value="last"
                  :items="item"
                  label="governate"
                  outlined
                ></v-select>
              </v-col> -->
              <v-col cols="12" sm="4">
                <v-text-field v-model="form.postcode" label="Post Code" required></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.phone" label="Phone" required></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="#5cbbff" type="submit">Continue to Shipping</v-btn>

          </v-container>
        </v-form>
      </div>
      <div class="col-md-5" style="background-color:#eaeaea">

        <div class="discount_section mt-5">
          <div class="border-bottom  p-2 img"
       v-for="item in cart"
      :key="item.product.id"

          >
            <img
             :src="item.product.img"
            />
            <span class="price"> <strong>{{ item.product.name }}</strong></span>
            <div style="float:right">
                {{ item.quantity }} x ${{item.price}}
            </div>
            <div style="clear:both"></div>
            <h6 style="width: 50%;margin-left: 70px;margin-top:-31px">{{ item.sizeTarget }} - {{item.sizeCm}} </h6>
          </div>

          <div class="discount">
            <v-form class="form_discount">
              <v-text-field v-model="discount" label="Discount"></v-text-field>
              <v-btn @click="apply_discount()" class="mr-4">Apply</v-btn>
            </v-form>
          </div>
          <hr />
          <!-- <div class="discount_text" style="color:#737171;padding:10px"> -->
            <div>
              <span>Sub Value</span>
              <span style="float:right">${{discount_value}}</span>
              <div style="clear:both"></div>
            </div>
            <!-- <div class="mt-3">
              <span>Shipping</span>
              <span style="float:right">calculated at next</span>
              <div style="clear:both"></div>
            </div> -->
          <!-- </div> -->

          <div style="font-size:20px;padding:10px">
            <span> Total Price : </span>
            <span style="float:right;">
              <span style="color:#737171;"></span> $ {{totalprice_2}}
            </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
    </div>


    <div class="row"  v-else>
      <div class="col-md-7">
                                                                      <!-- Button trigger modal -->


                                <!-- Modal -->
                                <div    class="modal show" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" show='true'>
                                         <div class="modal-dialog modal-dialog-centered" role="document">
                                                     <div class="modal-content" style="display: contents;">


                                                        <div class="moda-body">
                                                                ss
                                                          <form action="/api/payment/40" class="paymentWidgets" data-brands="VISA MASTER AMEX"></form>

                                                        </div>



                                                 </div>
                                        </div>
                                 </div>
        <v-form class="form" @submit.prevent="send">
          <v-container>
                            <div   v-if="errors.length > 0 && !message" class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Sorry!</strong> You should check in on some of those fields below.
                                    <br>
                                    <ul >
                                        <li v-for="item in errors" :key="item">
                                            {{ item }}
                                        </li>
                                    </ul>



                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div   v-if=" message.length >0 " class="alert alert-warning alert-dismissible fade show" role="alert">
                                  <h1> Done</h1>

                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>


            <v-row>
              <h4>تسجيل البيانات</h4>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.email" label="البريد الإلكترومى" required></v-text-field>
              </v-col>
              <!-- <v-checkbox
                        v-model="form.checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Keep me up to date on news and exclusive offers"
                        required
              ></v-checkbox>-->

              <v-col cols="12" md="6">
                <v-text-field v-model="form.fname" label="الإسم الأول" required></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field v-model="form.lname" label="الإسم الأخير" required></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.address" label="العنوان" required></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.apartment" label="المنزل"></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.city" label="المدينة" required></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="8">
                <v-select v-model="form.country" :items="item_ar" value='اليمن' label="الدولة" outlined></v-select>
              </v-col>
              <!-- <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  v-model="form.goverment"
                  item-text="name"
                  item-value="last"
                  :items="item"
                  label="المحافظة"
                  outlined
                ></v-select>
              </v-col> -->
              <v-col cols="12" sm="4">
                <v-text-field v-model="form.postcode" label="رمز البريد" required></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="form.phone" label="الهاتف" required></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="#5cbbff" type="submit">متابعة الشراء</v-btn>
            <span v-if="errors">{{errors}}</span>
            <span v-else>{{message}}</span>
          </v-container>
        </v-form>
      </div>
      <div class="col-md-5" style="background-color:#eaeaea">

        <div class="discount_section mt-5">
          <div class="border-bottom  p-2 img"
       v-for="item in cart"
      :key="item.product.id"

          >
            <img
             :src="item.product.img"
            />
            <span class="price"> <strong>{{ item.product.name }}</strong></span>
            <div style="float:right">
                {{ item.quantity }} x ${{item.price}}
            </div>
            <div style="clear:both"></div>
            <h6 style="width: 50%;margin-left: 70px;margin-top:-31px">{{ item.sizeTarget }} - {{item.sizeCm}} </h6>
          </div>

          <div class="discount">
            <v-form class="form_discount">
              <v-text-field v-model="discount" label="الكوبون"></v-text-field>
              <v-btn @click="apply_discount()" class="mr-4">خصم الأن</v-btn>
            </v-form>
          </div>
          <hr />
          <div class="discount_text" style="color:#737171;padding:10px">
            <div>
              <span style="float:right">الخصم</span>
              <span >${{discount_value}}</span>
              <div style="clear:both"></div>
            </div>

          </div>

          <div style="font-size:20px;padding:10px">
            <span style="float:right;">الحساب الإجمالى</span>
            <span >
              <span style="color:#737171;"></span> $ {{totalprice_2}}
            </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
    </div>


  </section>

</template>
 <script>
export default {

    computed: {
          larg(el,price,avilable){
             this.sizeTarget="Large - 70x93.5cm (28x37)"
            this.avilableTarget=avilable;
            this.active_el = el;
            this.priceTarget=price
            $(".active>.details_img").css({width:"100%",height:"250px"})
            $(".active>.content").css({width:"100%"})
        },
    cartTotalPrice() {
        this.totalprice_2= this.$store.getters.cartTotalPrice ;
      return this.$store.getters.cartTotalPrice;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      form: {
        email: null,
        lname: null,
        address: null,
        fname: null,
        apartment: null,
        city: null,
        phone: null,
        country: 'Saudi Arabia',
        goverment: 'Saudi Arabia',
        postcode: null,
        items: [],
        promocode:"",
      },
      discount: "",
      discount_value:0,
      totalprice_2:0,
      id:'',

      item: [
                "Afghanistan",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas (the)",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia (Plurinational State of)",
                "Bonaire, Sint Eustatius and Saba",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory (the)",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cayman Islands (the)",
                "Central African Republic (the)",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands (the)",
                "Colombia",
                "Comoros (the)",
                "Congo (the Democratic Republic of the)",
                "Congo (the)",
                "Cook Islands (the)",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Curaçao",
                "Cyprus",
                "Czechia",
                "Côte d'Ivoire",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic (the)",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Eswatini",
                "Ethiopia",
                "Falkland Islands (the) [Malvinas]",
                "Faroe Islands (the)",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories (the)",
                "Gabon",
                "Gambia (the)",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and McDonald Islands",
                "Holy See (the)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran (Islamic Republic of)",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea (the Democratic People's Republic of)",
                "Korea (the Republic of)",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic (the)",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands (the)",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia (Federated States of)",
                "Moldova (the Republic of)",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands (the)",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger (the)",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands (the)",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestine, State of",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines (the)",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Republic of North Macedonia",
                "Romania",
                "Russian Federation (the)",
                "Rwanda",
                "Réunion",
                "Saint Barthélemy",
                "Saint Helena, Ascension and Tristan da Cunha",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin (French part)",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Sint Maarten (Dutch part)",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan (the)",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands (the)",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates (the)",
                "United Kingdom of Great Britain and Northern Ireland (the)",
                "United States Minor Outlying Islands (the)",
                "United States of America (the)",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela (Bolivarian Republic of)",
                "Viet Nam",
                "Virgin Islands (British)",
                "Virgin Islands (U.S.)",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe",
                "Åland Islands"
            ],
    item_ar :
        [       "أفغانستان" ,
                "ألبانيا" ,
                "الجزائر",
                "ساموا الأمريكية",
                "أندورا" ,
                "أنغولا" ,
                "أنغيلا" ,
                "أنتاركتيكا" ,
                "أنتيغوا وبربودا",
                "الأرجنتين" ,
                "أرمينيا" ,
                "أروبا" ,
                "أستراليا" ,
                "النمسا" ,
                "أذربيجان",
                "جزر البهاما" ,
                "البحرين",
                "بنغلاديش" ,
                "بربادوس" ,
                "بيلاروس" ,
                "بلجيكا" ,
                "بليز" ,
                "بنين" ,
                "برمودا" ,
                "بوتان" ,
                "بوليفيا (دولة - المتعددة القوميات)" ,
                "بونير وسينت أوستاتيوس وسابا" ,
                "البوسنة والهرسك",
                "بوتسوانا" ,
                "جزيرة بوفيت" ,
                "البرازيل",
                "إقليم المحيط الهندي البريطاني (the)" ,
                "بروناي دار السلام",
                "بلغاريا" ,
                "بوركينا فاسو",
                "بوروندي" ,
                "كابو فيردي" ,
                "كمبوديا" ,
                "الكاميرون" ,
                "كندا",
                "جزر كايمان (ال)" ,
                "جمهورية أفريقيا الوسطى" ,
                "تشاد" ,
                "تشيلي" ,
                "الصين",
                "جزيرة الكريسماس" ,
                "جزر كوكوس (كيلينغ)" ,
                "كولومبيا" ,
                "جزر القمر" ,
                "جمهورية الكونغو الديمقراطية" ,
                "الكونغو (ال)" ,
                "جزر كوك" ,
                "كوستا ريكا",
                "كرواتيا" ,
                "كوبا" ,
                "كوراساو" ,
                "قبرص" ,
                "التشيك" ,
                "كوت ديفوار" ,
                "الدنمارك" ,
                "جيبوتي" ,
                "دومينيكا" ,
                "جمهورية الدومينيكان" ,
                "إكوادور" ,
                "مصر" ,
                "السلفادور",
                "غينيا الإستوائية",
                "إريتريا" ,
                "إستونيا" ,
                "Eswatini" ,
                "أثيوبيا",
                "جزر فوكلاند (مالفيناس)" ,
                "جزر فارو" ,
                "فيجي" ,
                "فنلندا" ,
                "فرنسا",
                "غيانا الفرنسية",
                "بولينيزيا الفرنسية",
                "الأقاليم الجنوبية الفرنسية (ال)" ,
                "الغابون" ,
                "غامبيا" ,
                "جورجيا" ,
                "ألمانيا",
                "غانا" ,
                "جبل طارق" ,
                "اليونان",
                "الأرض الخضراء",
                "غرينادا" ,
                "جوادلوب" ,
                "غوام" ,
                "غواتيمالا" ,
                "غيرنسي" ,
                "غينيا" ,
                "غينيا - بيساو" ,
                "غيانا" ,
                "هايتي" ,
                "قلب الجزيرة وجزر ماكدونالز",
                "الكرسي الرسولي" ,
                "هندوراس" ,
                "هونغ كونغ" ,
                "هنغاريا",
                "أيسلندا",
                "الهند",
                "إندونيسيا",
                "جمهورية إيران الإسلامية" ,
                "العراق",
                "أيرلندا" ,
                "جزيرة آيل أوف مان",
                "إسرائيل",
                "إيطاليا",
                "جامايكا" ,
                "اليابان",
                "جيرسي" ,
                "الأردن",
                "كازاخستان" ,
                "كينيا" ,
                "كيريباتي" ,
                "كوريا (جمهورية - الديمقراطية الشعبية)" ,
                "جمهورية كوريا" ,
                "الكويت",
                "قيرغيزستان" ,
                "جمهورية لاو الديمقراطية الشعبية (ذا)" ,
                "لاتفيا" ,
                "لبنان" ,
                "ليسوتو" ,
                "ليبيريا" ,
                "ليبيا" ,
                "ليختنشتاين" ,
                "ليتوانيا" ,
                "لوكسمبورغ" ,
                "ماكاو" ,
                'مدغشقر',
                "ملاوي" ,
                "ماليزيا" ,
                "جزر المالديف" ,
                "مالي" ,
                "مالطا" ,
                "جزر مارشال" ,
                "مارتينيك" ,
                "موريتانيا" ,
                "موريشيوس" ,
                "مايوت" ,
                "المكسيك" ,
                "ميكرونيزيا (ولايات - الموحدة)" ,
                "مولدوفا (جمهورية)" ,
                "موناكو" ,
                "منغوليا" ,
                "الجبل الأسود" ,
                "مونتسيرات" ,
                "المغرب",
                "موزمبيق" ,
                "ميانمار" ,
                "ناميبيا" ,
                "ناورو" ,
                "نيبال" ,
                "هولندا" ,
                "كاليدونيا الجديدة",
                "نيوزيلندا",
                "نيكاراغوا" ,
                "النيجر" ,
                "نيجيريا" ,
                "نيوي" ,
                "جزيرة نورفولك" ,
                "جزر ماريانا الشمالية" ,
                "النرويج",
                "سلطنة عمان",
                "باكستان" ,
                "بالاو" ,
                "فلسطين , دولة" ,
                "بنما" ,
                "بابوا غينيا الجديدة" ,
                "باراغواي" ,
                "بيرو",
                "الفلبين" ,
                "بيتكيرن" ,
                "بولندا",
                "البرتغال",
                "بورتوريكو" ,
                "دولة قطر",
                "جمهورية شمال مقدونيا" ,
                "رومانيا",
                "الاتحاد الروسي" ,
                "رواندا" ,
                "جمع شمل",
                "سانت بارتيليمي",
                "سانت هيلانة وأسنسيون وتريستان دا كونها" ,
                "سانت كيتس ونيفيس",
                "القديسة لوسيا",
                "سانت مارتن (الجزء الفرنسي)" ,
                "سانت بيير وميكلون",
                "سانت فنسنت وجزر غرينادين",
                "ساموا" ,
                "سان مارينو",
                "ساو تومي وبرينسيبي" ,
                "المملكة العربية السعودية",
                "السنغال",
                "صربيا" ,
                "سيشيل" ,
                "سيرا ليون",
                "سنغافورة" ,
                "سانت مارتن (الجزء الهولندي)" ,
                "سلوفاكيا" ,
                "سلوفينيا" ,
                "جزر سليمان",
                "الصومال",
                "جنوب أفريقيا",
                "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
                "جنوب السودان",
                "إسبانيا",
                "سيريلانكا",
                "السودان" ,
                "سورينام" ,
                "سفالبارد وجان ماين" ,
                "السويد",
                "سويسرا" ,
                "الجمهورية العربية السورية",
                "تايوان" ,
                "طاجيكستان" ,
                "جمهورية تنزانيا المتحدة" ,
                "تايلاند" ,
                "تيمور الشرقية" ,
                "توجو",
                "توكيلاو" ,
                "تونغا" ,
                "ترينداد وتوباغو",
                "تونس" ,
                "ديك رومي",
                "تركمانستان" ,
                "جزر تركس وكايكوس" ,
                "توفالو" ,
                "أوغندا" ,
                "أوكرانيا" ,
                "الإمارات العربية المتحدة" ,
                "المملكة المتحدة لبريطانيا العظمى وأيرلندا الشمالية (ال)" ,
                "جزر الولايات المتحدة الصغيرة النائية (ال)" ,
                "الولايات المتحدة الأمريكية" ,
                "أوروغواي" ,
                "أوزبكستان" ,
                "فانواتو" ,
                "فنزويلا (جمهورية - البوليفارية)" ,
                "فيتنام" ,
                "جزر العذراء البريطانية)",
                "جزر فيرجن (الولايات المتحدة)" ,
                "واليس وفوتونا",
                "الصحراء الغربية",
                "اليمن",
                "زامبيا" ,
                "زيمبابوي" ,
                "جزر آلاند"
            ],
      errors: [],
      nameRules: [v => !!v || "Name is required"],
      checkbox: false,
      message: "",
      formview:'',
    };
  },
  created(){
this.cartTotalPrice;
//  {"paletteid":"3","palettesize":"medium","quantity":5}
this.cart.forEach(element => {

    this.form.items.push({
            paletteid: element.product.id,
            palettesize: element.sizeTarget,
            quantity: element.quantity,
    })
});


  },
  methods: {
      apply_discount(){
            console.log(this.discount);
            axios.post('/api/check-promo',{code:this.discount}).then((data)=>{
                console.log(data.data);
                if(data.data.status)
                {
                    var price=parseInt(data.data.percentage);
                    this.discount_value=this.cartTotalPrice * price/100;
                    this.cartTotalPrice = this.cartTotalPrice - this.discount_value;
                    this.form.promocode=this.discount
                }

            }).catch(e=>{console.log(e);
            })


      },
       clearProductFromCart(product){
      this.$store.dispatch("deleteCartItem",product)
    },
    clearCartItems(){
      this.$store.dispatch("clearCartItems")
    },

    send() {
        // console.log(this.cart());
this.form.items=[    {paletteid:22,palettesize:"small",quantity:22}, {paletteid:2,palettesize:"small",quantity:22}]
      axios
        .post("/api/add-order", this.form)
        .then(data => {
          console.log(data.data);
          if (!data.data.status) {
            console.log(data.data.errors);
            // console.log(data.data.errors["items.0.paletteid"],'lplplplplp');

            // this.errors = data.data.errors;
          } else {
              $('#exampleModalCenter').modal('show')
              console.log(data.data.checkid);
              console.log(data.data.orderid);

            this.formview=data.data.orderid
            this.id=data.data.orderid

            this.message = "donnnnnnnnnnnnnnnnne";
                          let tag = document.createElement("script");
                              tag.setAttribute("src", "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId="+data.data.checkid);
                              document.head.appendChild(tag);
          }
        })

        .catch(error => (this.errors = error.response.data.errors));
    }
  }
};
</script>

<style scoped>
.form {
  width: 60%;
  margin: auto;
}
.img{
    margin: 20px 0 ;
}
.img img {
  width: 62px;
  height: 70px;
}
.form_discount {
  width: 70%;
  padding: 10px;
}
.discount_section {
  width: 65%;
}
.price{
    position: relative;
    top: -16px;
}
@media (min-width: 767px) and (max-width: 991px) {
  .discount_section {
    width: 100%;
  }
}

.alert{
    text-align: center;
}
</style>
