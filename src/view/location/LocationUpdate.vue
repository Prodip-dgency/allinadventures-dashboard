<template>
     <div class="main-container">
         <div class="container">
            <form>
                 <div class="fild">
                   <label>Title</label>
                   <input type="text" v-model="location.title">
                 </div>
                 <div class="fild">
                   <label>Description</label>
                   <textarea name="" id="" cols="110" rows="10" v-model="location.desciption"></textarea>
                 </div>
                 <div class="fild">
                   <label>Address</label>
                   <input type="text"  v-model="location.address">
                 </div>

                 <div class="city-state">
                    <div class="fild">
                      <label>City</label>
                      <input type="text" class="city-input" v-model="location.city">
                    </div>
                   <div class="fild">
                      <label>State</label>
                      <input type="text" class="city-input"  v-model="location.state">
                    </div>
                 </div>

                 <div class="fild">
                    <label >GPS Data</label>
                    <input type="text" v-model="location.gps_data">
                 </div>

                 <!-- fnjy6tjnudy -->
<!-- 
                 <div class="fild">
                    <label >Card Image</label>
                    <input type="file" name="image" class="img-input" :value="location.card_image">
                    <input type="submit" name="submit" value="Upload"  class="img-input">
                 </div> -->

                 <div class="btn-main">
                    <router-link :to="{name:'Location'}" @click.prevent="myfunc" class="btn" >Update</router-link>
                 </div>

            </form>
         </div>
     </div>
</template>

<script>
export default {

  data(){
    return{
      locationId : this.$route.params.id,
      location: [],
     
    }
  },

  methods:{
     myfunc(){

      let newLocation = this.location;

            console.log(newLocation);
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify( newLocation)
        }
            let fetchRes = fetch("http://192.241.157.30/activity/viewset/location/" + this.locationId + "/", options);
            fetchRes.then(res =>res.json())
            .then(data => this.location=data)
        
    }
  },

  mounted() {
     fetch("http://192.241.157.30/activity/viewset/location/" + this.locationId)
     .then((res)=>res.json())
     .then((data)=>this.location=data)
  }

}
</script>

<style scoped>

 form {
  /* Center the form on the page */
  margin: 5rem auto;
  width: 62rem;
  height: 43rem;
  /* Form outline */
  padding: 1.5rem;
  border: 1px solid #CCC;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background: rgb(204, 204, 204); */

}

.fild{
    display: flex;
    align-items: center;
    
}

label{
   font-size: 1.4rem;
   font-weight: 500;
   width: 8rem;
}
textarea{
  margin-left: 1rem;
  /* background: #979393;; */
  border-radius: 4px;
}

input{

  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 8px 2rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  /* background: #979393;
  color: white; */
  font-size: 1.2rem;
  font-weight: 400;

}

.city-state{
  display: flex;
  justify-content: space-between;
}

.city-input{
   width: 80%;
}

.img-input{
  width: 48%;
}

.btn-main{
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.btn{
    height: 2.5rem;
    width: 10rem;
    display: inline-block;
    background-color:rgb(179, 2, 2);
    color: #fff;
    font-size: 1.3rem;
    font-weight: 400;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>