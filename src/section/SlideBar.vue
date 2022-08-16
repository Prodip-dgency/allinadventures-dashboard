<template>
  <div class="container">
    <div class="logo">
      <img src="..\assets\logo.png" alt="" />
    </div>
    <div class="menu">
      <ul id="sidebar-menu">
        <li class="list list1">
          <router-link :to="{ name: 'Activity' }">
            <span class="material-icons-outlined">assignment</span>
            Activity
          </router-link>
        </li>
        <li class="list list2">
          <router-link :to="{ name: 'Location' }">
            <span class="material-icons-outlined">location_on</span>
            Location
          </router-link>
        </li>
        <li class="list">
          <span class="material-icons-outlined">casino</span>
          <span>Virtual Games</span>
        </li>
        <li class="list">
          <router-link :to="{name:'Gallery'}">
          <span class="material-icons-outlined">collections</span>
          <span>Gallery</span>
          </router-link>
        </li>
        <li class="list">
          <span class="material-icons-outlined">event</span>
          <span>Event</span>
        </li>
        <li class="list">
          <span class="material-icons-outlined">card_giftcard</span>
          <span>Gift Card</span>
        </li>
        <li class="list">
          <span class="material-icons-outlined">preview</span>
          <span>Review</span>
        </li>
        <li class="list">
          <span class="material-icons-outlined">quiz</span>
          <span>Faq</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // mounted(){
  //     let sidebarmenu = document.getElementById('sidebar-menu')
  //     let sidebarmenu_items = sidebarmenu.getElementsByClassName('list')
  //     for (let i = 0; i < sidebarmenu_items.length; i++){
  //         sidebarmenu_items[i].addEventListener('click', function(){
  //             let current = document.getElementsByClassName('selected');
  //             current[0].className = current[0].className.replace(" selected", "");
  //             this.className += " selected";
  //         })
  //     }
  // }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 21rem;
  background: linear-gradient(#00031b, #003563);
  color: white;
}

.logo {
  width: 20rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 5rem;
}

.list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  cursor: pointer;
}

.list a {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: white;
}

ul {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
/* .selected {
    width: 16rem;
    height: 2.5rem;
    background: rgb(179, 2, 2);
    padding: 0.4rem 0.6rem;
  } */

a.router-link-active {
  width: 16rem;
  height: 2.5rem;
  background: rgb(179, 2, 2);
  padding: 0.4rem 0.6rem;
}
</style>
