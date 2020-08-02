<template>
  <section style="min-height:200px">
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
      errors: {}
    };
  },
  created() {
    axios
      .get("/api/get-about-content")
      .then(response => {
        this.artists = response.data.dataArtist;
        this.about = response.data.data
      })
      .catch(error => this.errors=error.response.data);
  },

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
