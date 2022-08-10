<template>
   <div class="container">
      <div class="main-txt">
        <h2>All In Adventure</h2>
      </div>
    <div class="login">
        <div class="notification">
            <span class="material-symbols-outlined">notifications</span>
        </div>
        <div class="account">
          <img src="../assets/boss.png" alt="">
          <p>Shawon Kayum</p>
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
            
        </div>
    </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container{
  display: flex;
  justify-content: space-between;
   background: linear-gradient(to right,#003563,#00031b);
   height: 5rem;
   padding: 1rem 3rem;
}

.main-txt{
   background: -webkit-linear-gradient(180deg,#CF9A41,#E4C96E,#905E36);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 /* color: white; */
 font-family: 'Permanent Marker', cursive;
 font-size: 1.6rem;
 display: flex;
 align-items: center;
}

.login{
 display: flex;
 gap: 1.2rem;
}
.login  span{
   color: white;
}

.notification{
  display: flex;
  align-items: center;

}

.account{
  color: white;
 display: flex;
 align-items: center;
 gap: 0.6rem;
 font-size: 1.2rem;
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.account span{
  cursor: pointer;
}

 img{
  height: 2.9rem;
   width: 2.9rem;
   border-radius: 50%;
   background: white;
 }

</style>