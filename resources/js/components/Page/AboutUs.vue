<template>
  <section style="min-height:486px">
        <div class="spinner-content">
         <div class="spinner"></div>
        </div>

    <div class="mission myhome mt-4">
      <h3 class="title" @click="mission = !mission" v-if="!mission"><span>{{ $t("message.ourmission") }} </span > <span class="plus" v-if="mission==false">+</span>  </h3>
      <h3 class="title" @click="mission = !mission" v-else>  <span > {{ $t("message.ourmission") }} </span > <span class="plus" v-if="mission==true">-</span>  </h3>
      <div class="row mt-5 text-center" v-if="mission">
        <div class="col-md-8" v-if=" $i18n.locale == 'en'">
          <p>
            {{ about.body1_en}}
          </p>
          <p>
            {{  about.body2_en}}&nbsp;
          </p>
        </div>
        <div class="col-md-3" v-if=" $i18n.locale == 'en'">
          <img
            :src="about.body_image"
            alt
          />
        </div>
        <div class="col-md-3" v-if=" $i18n.locale == 'ar'">
          <img
            :src="about.body_image"
            alt
          />
        </div>
        <div class="col-md-8" v-if=" $i18n.locale == 'ar'">
          <p>
            {{ about.body1_ar}}
          </p>
          <p>
            {{ about.body2_ar}}&nbsp;
          </p>
        </div>
      </div>
    </div>
    <div class="support mt-4">
      <h3 class="title" @click="support = !support" v-if="!support"><span>{{ $t("message.support") }} </span > <span class="plus" v-if="support==false">+</span>  </h3>
      <h3 class="title" @click="support = !support" v-else>  <span > {{ $t("message.support") }} </span > <span class="plus" v-if="support==true">-</span>  </h3>
      <div class="mt-5" v-if="support">
        <p
          class="text-center"
        >{{ $t("message.support_text") }}</p>
        <div class="row justify-content-md-center support_div text-center ">
          <div class="col-md-2 content" @click="activate(1)" :class="{ active : active_el == 1 }">
            <img
              src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-1.svg?v=12010384132983907058"
              style="height: 110px"
            />
            <h3 class="mt-4">{{ $t("message.Product") }}</h3>
          </div>
          <div class="col-md-2 content" @click="activate(2)" :class="{ active : active_el == 2 }">
            <img
              src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-2.svg?v=16172020802828672890"
              style="height: 110px"
            />
            <h3 class="mt-4">{{ $t("message.Shipping") }}</h3>
          </div>
          <div class="col-md-2 content" @click="activate(3)" :class="{ active : active_el == 3 }">
            <img
              src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-3.svg?v=6657556400331861725"
              style="height: 110px"
            />
            <h3 class="mt-4">{{ $t("message.Collabs") }}</h3>
          </div>
          <div class="col-md-2 content" @click="activate(4)" :class="{ active : active_el == 4 }">
            <img
              src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-5.svg?v=6164253995379968036"
              style="height: 110px"
            />
            <h3 class="mt-4">{{ $t("message.contact") }}</h3>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-sm-12" v-if="active_el==1">
            <div class="row" v-if=" $i18n.locale == 'en'">
              <div class="col-sm-5 text-center left">
                <p class="font-weight-bold mb-5">{{ $t("message.product_text1") }}</p>
                <p class="font-weight-bold mb-5">{{ $t("message.product_text2") }}</p>
                <p class="font-weight-bold mb-4">{{ $t("message.product_text3") }}</p>
                <p class="font-weight-bold mb-4">{{ $t("message.product_text4") }}</p>
                <p
                  class="font-weight-bold mb-4"
                >{{ $t("message.product_text5") }}</p>
                <p class="font-weight-bold mb-4">{{ $t("message.product_text6") }}</p>
              </div>
              <div class="col-sm-7">
                <p>
                    {{ $t("message.product_text7") }}
                </p>
                <p>
                   {{ $t("message.product_text8") }}
                </p>
                <p>
                    {{ $t("message.product_text9") }}
                </p>
                <p> {{ $t("message.product_text10") }}</p>
                <p>
                    {{ $t("message.product_text11") }}
                </p>
                <p>
                   {{ $t("message.product_text12") }}
                </p>
              </div>
            </div>
              <div class="row" v-else>
                <div class="col-sm-7">
                <p>
                  {{ $t("message.product_text7") }}
                </p>
                <p>
                  {{ $t("message.product_text8") }}
                </p>
                <p>
                  {{ $t("message.product_text9") }}
                </p>
                <p> {{ $t("message.product_text10") }}</p>
                <p>
                    {{ $t("message.product_text11") }}
                </p>
                <p>
                    {{ $t("message.product_text12") }}
                </p>
              </div>
              <div class="col-sm-5 text-center right">
                <p class="font-weight-bold mb-5">{{ $t("message.product_text1") }}</p>
                <p class="font-weight-bold mb-5">{{ $t("message.product_text2") }}</p>
                <p class="font-weight-bold mb-5">{{ $t("message.product_text3") }}</p>
                <p class="font-weight-bold mb-5">{{ $t("message.product_text4") }}</p>
                <p
                  class="font-weight-bold mb-5"
                >{{ $t("message.product_text5") }}</p>
                <p class="font-weight-bold mb-4">{{ $t("message.product_text6") }}</p>
              </div>
              
            </div>
          </div>
          <div class="col-sm-12" v-if="active_el==2">
            <div class="row" v-if=" $i18n.locale == 'en'">
              <div class="col-sm-5 text-center left">
                <p class="font-weight-bold mb-5">{{ $t("message.ship_text1") }}</p>
                <p class="font-weight-bold mt-3">{{ $t("message.ship_text2") }}</p>
              </div>
              <div class="col-sm-7">
                <p>
                  {{ $t("message.ship_text3") }}
                </p>
                <p>
                  {{ $t("message.ship_text4") }}
                </p>
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-sm-7">
                <p>
                  {{ $t("message.ship_text3") }}
                </p>
                <p>
                  {{ $t("message.ship_text4") }}
                </p>
              </div>
              <div class="col-sm-5 text-center right">
                <p class="font-weight-bold mb-5">{{ $t("message.ship_text1") }}</p>
                <p class="font-weight-bold mt-5">{{ $t("message.ship_text2") }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12" v-if="active_el==3">
            <div class="row" v-if=" $i18n.locale == 'en'">
              <div class="col-sm-5 text-center left">
                <p class="font-weight-bold mb-4">{{ $t("message.Collabs_text1") }}</p>
                <p class="font-weight-bold">{{ $t("message.Collabs_text2") }}</p>
              </div>
              <div class="col-sm-7">
                <p>
                  {{ $t("message.Collabs_text3") }}
                </p>
                <p>
                  {{ $t("message.Collabs_text4") }}
                </p>
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-sm-7">
                <p>
                  {{ $t("message.Collabs_text3") }}
                </p>
                <p>
                  {{ $t("message.Collabs_text4") }}
                </p>
              </div>
              <div class="col-sm-5 text-center right">
                <p class="font-weight-bold mb-4">{{ $t("message.Collabs_text1") }}</p>
                <p class="font-weight-bold">{{ $t("message.Collabs_text2") }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12" v-if="active_el==4">
            <v-form class="form" @submit.prevent="send" v-if=" $i18n.locale == 'en'">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.name" label="First name" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field v-model="form.phone" label="Phone Number" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-textarea v-model="form.message" outlined name="input-7-4" label="Message"></v-textarea>
                  </v-col>
                </v-row>
                <v-btn color="#f2efeb" style="margin-left:12px" type="submit">Send</v-btn>
              </v-container>
            </v-form>
            <v-form class="form" @submit.prevent="send" v-else>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.name" label=" اﻷسم" required dir="rtl"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.email" label="البريد اﻷلكتروني" required dir="rtl"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field v-model="form.phone" label="رقم التليفون الخاص بك" required dir="rtl"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-textarea v-model="form.message" outlined name="input-7-4" label="اكتب رسالتك" dir="rtl"></v-textarea>
                  </v-col>
                </v-row>
                <v-btn color="#f2efeb" style="margin-left:12px;float:right" type="submit">ارسال</v-btn>
                <div style="clear:both"></div>
              </v-container>
            </v-form>
          </div>
        </div>
      </div>
    </div>
    <div class="artists mt-4 mb-2">
        <h3 class="title" @click="artist = !artist" v-if="!artist"> <span>{{ $t("message.artists") }}</span > <span class="plus" v-if="artist==false">+</span>   </h3>
        <h3 class="title" @click="artist = !artist" v-else>{{ $t("message.artists") }} <span class="false" v-if="artist==true">-</span> </h3>
        <div class=" mt-5 text-center" v-if="artist">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center">
                      {{ $t("message.artisttext") }}
                    </p>
                </div>
                <div class="col-sm-12">
                    <div class="row justify-content-sm-center">
                        <div class="col-sm-4 col-md-3 col-lg-2" v-for="artist in artists" :key="artist.id">
                          <div class="about-team__people">
                            <a :href="artist.sociallink" style="color:#000" target="_blank">
                              <img :src="artist.image_ar" alt="artist" style="border-radius:28%;width:100px;height:100px">
                              <h4 class="about-team__name" v-if=" $i18n.locale == 'en'">{{artist.name_en}}</h4>
                              <h4 class="about-team__name" v-else>{{artist.name_ar}}</h4>
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      artists: [],
      about:{},
      mission: true,
      artist: false,
      support: false,
      active_el: 1,
      form: {
        name: null,
        email: null,
        phone: null,
        message: null
      },
      errors: {}
    };
  },
  created() {
    axios
      .get("/api/get-about-content")
      .then(response => {
        this.artists = response.data.dataArtist;
        this.about = response.data.data
        if(this.about ==null)
        {
          this.about = ''
        }
      })
      .catch(error => this.errors=error.response.data);
  },
  methods: {
    activate: function(el) {
      this.active_el = el;
    },
    send()
    {
      axios.post("/aboutContacts-api",this.form)
      .then(res=>this.form='')
      .catch(error => this.errors=error.response.data);

    }
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 34px;
  font-weight: bold;
  line-height: 60px;
  margin: 0;
  margin-bottom: 1px;
  cursor: pointer;
  transition: all 0.4s;
  text-align: center;
  background: #f2efeb;
}
.title:hover {
  background: #e6e1da;
}
.about-team__people {
  margin: 0 20px 30px;
}
.about-team__people img {
  width: 120px;
}
.topteam {
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.support_div .content {
  color: grey;
  cursor: pointer;
}
.support_div .active {
  color: black;
  font-weight: bold;
}
.left {
  border-right: 2px solid #000;
  padding-left: 300px;
}
@media (max-width: 991px) {
  .left {
    border-right: none;
    padding-left: 0;
  }
}
@media (min-width: 992px) and (max-width: 1999px) {
  .left {
    padding-left: 150px;
  }
}
.right {
  border-left: 2px solid #000;
  padding-right: 300px;
}
@media (max-width: 991px) {
  .right {
    border-left: none;
    padding-right: 0;
  }
}
@media (min-width: 992px) and (max-width: 1999px) {
  .right {
    padding-right: 150px;
  }
}
.form {
  width: 50%;
  margin: auto;
}
.mission img{
  width:90%;
  height:370px;
  border-radius: 10px;
}
@media(max-width:767px){
  .mission img{
    width: 50% !important;
  }
}
@media(min-width:768px) and (max-width:991px){
  .mission img{
    width: 100% !important;
  }
}


</style>
