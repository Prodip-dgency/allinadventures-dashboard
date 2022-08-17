<template>
  <div>
    <form>
      <div>
        <h2 class="title">Create a New Location</h2>
      </div>
      <div class="fild">
        <label>Title</label>
        <input type="text" v-model="locationData.title" />
      </div>
      <div class="fild">
        <label>Description</label>
        <textarea
          name=""
          id=""
          cols="110"
          rows="10"
          v-model="locationData.desciption"
        ></textarea>
      </div>
      <div class="fild">
        <label>Address</label>
        <input type="text" v-model="locationData.address" />
      </div>

      <div class="city-state">
        <div class="fild">
          <label>City</label>
          <input type="text" v-model="locationData.city" />
        </div>
        <div class="fild">
          <label>State</label>
          <input type="text" v-model="locationData.state" />
        </div>
      </div>

      <div class="fild">
        <label>State</label>
        <div class="select-container">
          <div @click="opendropdown">
            <input type="text" class="select" />
          </div>
          <div
            class="option"
            :class="activeclass"
            @click="show('nature','hide')"
          >
            <div v-for="item in gallery" :key="item.title">
              <img :src="item.image" alt="" class="select-img" />
              {{item.title}}
            </div>
          </div>
        </div>
      </div>

      <div class="update-btn">
        <router-link
          :to="{ name: 'Location' }"
          @click.prevent="myfunc"
          class="btn"
          >Update Location</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locationData: {
        title: "",
        desciption: "",
        slug: "",
        address: "",
        city: "",
        state: "",
      },
      activeclass: "hide",
      gallery: [],
    };
  },

  mounted() {
    fetch("http://192.241.157.30/activity/viewset/gallery/")
      .then((res) => res.json())
      .then((data) => (this.gallery = data))
     
      
  },

  methods: {
    myfunc() {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.locationData),
      };
      let fetchRes = fetch(
        "http://192.241.157.30/activity/viewset/location/",
        options
      );
      fetchRes
        .then((res) => res.json())
        .then((d) => {
          console.log(d);
        });
        // console.log(this.gallery);
    },

    show(x, classname) {
       document.querySelector(".select").value = x;
      this.activeclass = classname;
    },
    opendropdown() {
       if (this.activeclass) {
          this.activeclass = "";
       }else{
        this.activeclass= "hide"
       }
        
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 0;
  padding: 0;
}

form {
  /* Center the form on the page */
  margin: 5rem auto;
  width: 60rem;
  height: 40rem;
  /* Form outline */
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background: rgb(204, 204, 204); */
}

.fild {
  display: flex;
  align-items: center;
}
.update-btn {
  display: flex;
  justify-content: center;
}
.btn {
  height: 2.5rem;
  width: 10rem;
  display: inline-block;
  background-color: rgb(179, 2, 2);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

input {
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

label {
  font-size: 1.4rem;
  font-weight: 500;

  width: 8rem;
}
textarea {
  margin-left: 1rem;
  /* background: #979393;; */
  border-radius: 4px;
}

.select {
  width: 16rem;
  height: 3rem;
  border: 0.5px solid;
}

.city-state {
  display: flex;
  justify-content: space-between;
}

.select-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  position: relative;
  width: 16rem;
  padding: 1rem 0;
  margin-bottom: 3rem;
}
.select-container input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}
.select-container::before {
  content: "";
  position: absolute;
  right: 2px;
  top: 15px;
  z-index: 10000;
  width: 8px;
  height: 8px;
  border: 2px solid #333;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(-45deg);
  cursor: pointer;
}
.select-container.hide::before {
  transform: rotate(-225deg);
}
.select-container .option {
  position: absolute;
  top: 70px;
  height: 15rem;
  background: #fff;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  overflow-y: scroll;
}

.select-container .option div {
  padding: 12px 15px;
  display: flex;
  align-items: center;
}
.select-container .option div:hover {
  background: #62baea;
  color: #fff;
}
.hide {
  display: none;
}
.select-img {
  width: 2.5rem;
}
</style>
