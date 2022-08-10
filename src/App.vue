<template>

 <div>
     <div class="side-bar">
         <slide-bar />
     </div>
     <div class="nav-bar">
        <nav-section />
     </div>
     <div class="body">
         <body-section />
     </div>

   
 </div>

  
</template>

<script>
 import NavSection from './section/NavSection.vue'
 import BodySection from './section/Body.vue'
 import LocationForm from './form/LocationForm.vue'
 import SlideBar from './section/SlideBar.vue'
export default {
    components: {
        NavSection,
       BodySection,
       LocationForm,
       SlideBar
    }


}
</script>

<style scoped>

 .side-bar{
   position: fixed;
   top: 0;
   left: 0;
 }
 .nav-bar{
  
    margin-left: 21rem;
 }
 .body{
  margin-left: 20rem;
 }
</style>