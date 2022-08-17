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
          <input type="text" class="select" />
          <div class="option">
            <div><img src="../../assets/prodip.jpg" alt="" class="select-img"> Nature</div>
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
    };
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

.select-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  position: relative;
}
.select-container input{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.select-img{
  width: 2.5rem;
  
}
</style>
