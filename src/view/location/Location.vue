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
                       <button @click="popupOpen('display')" type="submit">Delete</button>
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

               <div class="pop-up" :class="activeclass"   v-for="location in locations" :key="location.id">
                   <div class="popup-content">
                      <div class="close" @click="popupclose">+</div>
                       <div class="img">
                         <span class="material-symbols-outlined">warning</span>
                       </div>
                       <h2>Are you sure you want to delete this location ?</h2>
                       <button class="popup-btn" @click="deletefunc(location.id)">delete</button>
                   </div>
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
            activeclass: '',
            locations: []
        }
      },
    
    
      methods:{
       popupOpen(classname){
             this.activeclass = classname
              
          },
          
       popupclose(){
         this.activeclass= ""
       },

       deletefunc(x){
            let options = {
             method: 'DELETE',
             headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
               },

            };
            fetch("http://192.241.157.30/activity/viewset/location/" + x +"/" , options)
            .then((res)=>res.json())
            .then(data=> console.log(data))

            this.activeclass= ""
            
         }

      },

      mounted(){
        fetch("http://192.241.157.30/activity/viewset/location/")
        .then((res) => res.json())
        .then((data)=> this.locations = data)
      },
   
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
    color: rgb(33, 226, 33);
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


.pop-up{
   width: 100%;
   height: 100%;
   background-color: rgb(0,0 , 0,0.4);
   position: absolute;
   top: 0;
   display: none;
   justify-content: center;
   align-items: center;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.popup-content{
   width: 35rem;
   height: 19rem;
   background: white;
   padding: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
   position: relative;
 
}
.close{
   font-size: 2rem;
   position: absolute;
   top: 0.6rem;
   right: 1.5rem;
   transform: rotate(45deg);
   cursor: pointer;
}

.material-symbols-outlined{
   font-size: 5rem;
   color: rgb(235, 63, 11);
}
.popup-content h2{
   font-size: 1.45rem;
   
}

.popup-btn{
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

.display{
   display: flex;
}


</style>