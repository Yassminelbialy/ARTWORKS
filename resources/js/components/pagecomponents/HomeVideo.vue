<template>
    <header style="background-image:url(https://previews.123rf.com/images/eyematrix/eyematrix1712/eyematrix171200014/91720468-used-artists-paint-brushes-different-colors-on-palette-background.jpg)" class="about-us">
        <div class="overlay"></div>

        <div class="text mb-4 about-content">
            <h1>{{ $t("message.about") }}</h1>
            <router-link to="/about" class="mb-5">
                <a class="btn btn-light mb-5">{{ $t("message.readmore") }}</a>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            data:'',
        }
    },
    beforeCreate(){
                axios.get('/api/homedata').then((result) => {

            if(result.data.status)
            {

                this.data="/"+result.data.data.video
            }
        }).catch((err) => {
            console.log(err.data);

        });
    }

}
</script>

<style scoped>
.about-us .about-content{
    position: relative;
    top:342px;


}
.about-us{
    background-repeat: no-repeat;
    background-size: cover  ;
    background-position: center;
    }
</style>



