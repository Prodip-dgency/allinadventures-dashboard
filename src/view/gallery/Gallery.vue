<template>
  <div class="main-container">
    <div class="main-txt-container">
      <h1>Select a photo to change</h1>
      <router-link :to="{name:'Gallerycreate'}" class="add-btn">Add Photos</router-link>
    </div>
    <div class="gallery-container">
      <div class="main-card" v-for="item in gallery" :key="item.title">
        <img :src="item.image" alt="" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="main-btn">
          <button class="btn-1">
            <span class="material-symbols-outlined"> edit </span>
          </button>
          <button class="btn-2">
            <span class="material-symbols-outlined"> delete </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [],
    };
  },

  mounted() {
    fetch("http://192.241.157.30/activity/viewset/gallery/")
      .then((res) => res.json())
      .then((data) => (this.gallery = data));
  },
};
</script>

<style lang="scss" scoped>
.main-txt-container{
    height: 9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5rem;
}

h1 {
  font-size: 2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.add-btn {
  height: 1.4rem;
  text-decoration: none;
  background-color: rgb(179, 2, 2);
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 1.6rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin-right: 2.5rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.gallery-container {
  width: 95%;
  margin: 3rem 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 3rem;

  .main-card {
    width: 17rem;
    height: 21rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 0.6px solid rgb(223, 213, 213);
    img {
      width: 90%;
      height: 60%;
    }
    h3 {
      margin: 0.2rem;
    }
    p {
      margin: 0.3rem;
    }
    .main-btn {
      display: flex;
      justify-content: center;
      gap: 2rem;
      .btn-1 {
        background: white;
        color: rgb(101, 168, 0);
        border-radius: 10px;
        border: 0.5px solid rgb(223, 217, 217);
        cursor: pointer;
        padding: 4px 20px 1px 20px;
        &:hover {
          background: rgb(101, 168, 0);
          color: white;
        }
      }
      .btn-2 {
        background: white;
        color: red;
        border-radius: 10px;
        border: 0.5px solid rgb(223, 217, 217);
        cursor: pointer;
        padding: 5px 20px 2px 20px;
        &:hover {
          background: red;
          color: white;
        }
      }
    }
  }
}
</style>
