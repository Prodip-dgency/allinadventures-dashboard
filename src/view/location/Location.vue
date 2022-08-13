<template>
   <div class="main-container">
      <div class="text-container">
         <h1>Select location to change</h1>
            <div class="btn-container">
                <router-link :to="{name:'Locationform'}" class="main-btn">Add Location</router-link>
            </div>
      </div>

       <div class="container">
          <table class="table-container">
             <thead>
                 <tr>
                   <th @click="myfunc">Title</th>
                   <th>Description</th>
                   <th>Address</th>
                   <th>City</th>
                   <th>State</th>
                </tr>
             </thead>
             <tbody>
                  <tr v-for="location in locations" :key="location.id" >
                     <td class="list">
                        <router-link  :to="{name:'Locationdetail' , params:{id:location.id}}" >
                           {{ location.title }}
                        </router-link>
                     </td>
                     <td>{{location.desciption}}</td>
                     <td>{{location.address}}</td>
                     <td>{{location.city}}</td>
                     <td >{{location.state}}</td>

                     <div class="btn">
                       <button>Delete</button>
                     </div>
                  </tr>
             </tbody>
          </table>
            <!-- <div class="detail-btn">

              <div  v-for="location in locations" :key="location.id">
               <router-link  :to="{name:'Locationdetail' , params:{id:location.id}}" >
                 <button>Detail Here</button>
              </router-link>
             </div>
            </div> -->
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

  .text-container{
   display: flex;
   align-items: center;
   justify-content: space-between;
   
  }

  h1{
    margin: 4rem 5rem;
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
    
  }

  .btn-container{

  }

   .main-btn{
    height: 3rem;
    text-decoration: none;
    background-color:rgb(179, 2, 2);
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem 1.6rem;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    margin-right: 2.5rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
  }

  .container{
    width: 85%;
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
    background: rgb(231, 227, 227);
   
  }
  thead tr th{
   padding: 0.4rem 0.8rem;
  }

  tbody a{
    height: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: rgb(59, 170, 59);
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     font-size: 1rem;
     transition: all 0.8s;
     font-weight: 500;

  }

  tbody a:hover{
  color: red;
  font-size: 1.1rem;
  }

  tbody{
    height: 4rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  
  tbody tr td{
      padding: 0.4rem 0.8rem;
  }

  td {
  border-bottom: 1px solid rgb(214, 207, 207);
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
   margin-left: 5rem;
   cursor: pointer;
   border: 0.5px dotted #999;
  
  }
  
   tbody button:hover{
      background:rgb(179, 2, 2) ;
      color: white;
      border: none;
      transition: all 1s;
   }
 
 

.detail-btn{
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   margin-top: 4rem;
   gap: 1rem;

}
.btn{
   height: 4rem;
   display: flex;
   align-items: center;
}


</style>