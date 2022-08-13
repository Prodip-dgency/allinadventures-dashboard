<template>
   <div class="main-container">

       <div class="title">
             <h1>Location Details</h1>
        </div>

      <div class="update-btn">
         <div v-if="location.id">
            <router-link @click="myfunc" :to="{name:'Locationupdate' , params:{id:location.id}}">Update Location</router-link>
         </div>
      </div>


     <div class="container">
        <p class="header">Title : </p>
        <p class="text"> {{location.title}}</p>
     </div>

     <div class="container">
        <p class="header">Description : </p>
        <p class="text"> {{location.desciption}}</p>
     </div>

     <div class="container">
        <p class="header">Address : </p>
        <p class="text"> {{location.address}}</p>
     </div>

     <div class="container">
        <p class="header">city : </p>
        <p class="text"> {{location.city}}</p>
     </div>

     <div class="container">
        <p class="header">State : </p>
        <p class="text"> {{location.state}}</p>
     </div>

     <div class="container">
        <p class="header">GPS Data : </p>
        <p class="text"> {{location.gps_data}}</p>
     </div>

     <div class="container">
        <p class="header">Card Image : </p>
        <p class="text"> {{location.card_image}}</p>
     </div>

     <div class="container">
        <p class="header">Cover Image : </p>
        <div v-if="location.cover_image" class="image-container">
            <img :src="location.cover_image.image" alt="">
            <h2>{{ location.cover_image.title }}</h2>
            <p class="img-description">{{location.cover_image.description}}</p>
        </div>
     </div>

     <div class="container">
        <p class="header">Cover Image Mobile : </p>
        <div v-if="location.cover_image_mobile" class="image-container">
            <img :src="location.cover_image_mobile.image" alt="">
            <h2>{{ location.cover_image_mobile.title }}</h2>
            <p class="img-description">{{location.cover_image_mobile.description}}</p>
        </div>
     </div>
       
   </div>
</template>

<script>

export default {
    data() {
        return {
            locationId : this.$route.params.id,
            location: []

        }
        
        // location : []
    },

    methods: {
        myfunc(){
            console.log(this.location.id)

        }

    },
    mounted() {
        fetch("http://192.241.157.30/activity/viewset/location/" + this.locationId)
        .then((result) => result.json())
        .then((data) => this.location = data)
    }





}
</script>

<style scoped>
 .main-container{
    margin: 5rem 3rem 0 5rem;
 }

 .update-btn{
    display: flex;
    justify-content: end;
    margin-right: 4rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }
 .update-btn a{
    height: 2rem;
    text-decoration: none;
    background-color:rgb(179, 2, 2);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1rem 2.3rem 0.6rem 2.3rem;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    margin-right: 2.5rem;
    box-shadow:  5px 5px 2px 1px rgba(0, 0, 0, 0.2);
 }
 .title{
    display: flex;
    justify-content: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }

 .container{
    display: flex;
    align-items: center;
 }

 .header{
    font-size: 1.5rem;
    width: 10rem;
    font-weight: 600;
    font-family: serif;
 }
 .text{
    font-size: 1.3rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }

 .image-container{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0 0 3rem 2rem;
 }

 .img-description{
    font-size: 1.45rem;
    
 }

</style>