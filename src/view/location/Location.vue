<template>
   <div class="main-container">
       <h1>Select location to change</h1>
      
       <router-link :to="{name:'Locationform'}" class="main-btn">Add Location</router-link>

       <div class="container">
          <table class="table-container">
             <thead >
                 <tr>
                   <th @click="myfunc">Title</th>
                   <th>Description</th>
                   <th>Address</th>
                   <th>City</th>
                   <th>State</th>
                </tr>
             </thead>

             <tbody>
               
                 <tr v-for="location in locations" :key="location.id">
                  <router-link :to="{name:'Locationdetail', params:{slug:location.id}}">
                 <td class="list">{{ location.title }}</td>
                 <td>{{location.desciption}}</td>
                 <td>{{location.address}}</td>
                 <td>{{location.city}}</td>
                 <td >{{location.state}}</td>
                  <td>
                     <button>Delete</button>
                  </td>
                  </router-link>
                 </tr>
                
              
             </tbody>
              
             
          </table>
       </div>


       <!-- <div class="container">
           <div class="list-head-container">
               <ul class="list-head">
                  <li>Title</li>
                  <li>Description</li>
                  <li>Address</li>
                  <li>City</li>
                  <li>State</li>
               </ul>
           </div>
           <div class="list-body-container">
                <ul class="list-body" v-for="location in locations" :key="location.id">
                    <li class="list1">{{ location.title }}</li>
                    <li class="list2">{{location.desciption}}</li>
                    <li class="list3">{{location.address}}</li>
                    <li>{{location.city}}</li>
                    <li>{{location.state}}</li>
                </ul>
           </div>
       </div> -->


     
   </div>

</template>

<script>
export default {
    data(){
        
        return{
            locations: []
        }
    },
    
    mounted(){
        fetch("http://192.241.157.30/activity/viewset/location/")
        .then((res) => res.json())
        .then((data)=> this.locations = data)
    },
    methods:{
       myfunc(){
        console.log(this.location)
       }
    }
}
</script>

<style scoped>
  .main-container{
     width: 100%;
  }

  h1{
    margin: 4rem 5rem;
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
    
  }

  .container{
    width: 90%;
    margin:1rem 5rem ;
  }

  .table-container{
    width: 100%;
  }

   thead{
    height: 3rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    text-align: left;
    /* display: flex;
    list-style: none;
    font-weight: 600;
    justify-content: space-between; */
  }

  tbody{
    height: 4rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    /* display: flex;
    list-style: none;
    font-weight: 400;
    justify-content: space-between; */
  }

  tbody button{
   background: white;
   color: rgb(201, 27, 27) ;
   width: 4.5rem;
   height: 1.9rem;
   font-size: 1rem;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-weight: 500;
   /* border: none; */
   padding: 0.3rem 0.2rem;
   border-radius: 10px;
   margin-left: 10rem;
   cursor: pointer;
  
  }
  
   tbody button:hover{
      background:rgb(179, 2, 2) ;
      color: white;
      border: none;
      transition: all 1s;
   }
 
  .list1{
     width: 10rem;
  }
  .main-btn{
    position: fixed;
    top: 8rem;
    right: 5rem;
    display: inline-block;
    background-color:rgb(179, 2, 2);
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.6rem 2.2rem;
    cursor: pointer;
    margin: 10px 20px;
    border: none;
    border-radius: 10px;
    
  }


</style>