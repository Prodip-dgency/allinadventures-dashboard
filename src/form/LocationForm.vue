<template>
    <div>
        <form action="">
            <div class="fild">
              <label>Title</label>
              <input type="text" v-model="locationData.title">
            </div>
            <div class="fild">
              <label>Description</label>
              <input type="text"  v-model="locationData.desciption">
            </div>
            <div class="fild">
              <label>Address</label>
              <input type="text" v-model="locationData.address">
            </div>
            <div class="fild">
              <label>City</label>
              <input type="text" v-model="locationData.city">
            </div>
            <div class="fild">
              <label>State</label>
              <input type="text" v-model="locationData.state">
            </div>

            <button @click.prevent="myfunc">Update Location</button>
        </form>
        
    </div>
</template>

<script>
export default {

    data(){
        
        return{
           locationData:{
              title: "",
              desciption: "",
              slug: "",
              address: "",
              city: "",
              state: ""




           }
        }
    },
    

    methods: {
        myfunc(){
            let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.locationData)
        }
            let fetchRes = fetch("http://192.241.157.30/activity/viewset/location/", options);
            fetchRes.then(res =>res.json())
            .then(d => {console.log(d)})
        }
    }

}
</script>

<style scoped>

form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 60rem;
  height: 30rem;
  /* Form outline */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}

.fild{
    display: flex;
    gap: 3rem;
}
button{
    height: 2.5rem;
    width: 10rem;
}

</style>