<template>
  <div class="main-container">
    <form>
      <h2>Upload a gallery item.</h2>
      <div class="text-section">
        <label>Title:</label>
        <input type="text" v-model="galleryData.title" />
      </div>
      <div class="text-section">
        <label>Description:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          v-model="galleryData.description"
        ></textarea>
      </div>
      <div class="text-section">
        <label for="Image">Select Image:</label>
        <input type="file" name="image" @change="uploadImage" />
      </div>
      <div class="submit-btn">
        <button class="btn" @click.prevent="postData">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryData: {
        title: "",
        description: "",
        image: "",
      },
    };
  },

  methods: {
    uploadImage(e) {
      this.galleryData.image = e.target.files[0];
    },

    postData() {
      const formData = new FormData()
      formData.append('image', this.galleryData.image);
      formData.append('title', this.galleryData.title);
      formData.append('description', this.galleryData.description);
      let options = {
        method: "POST",
        headers: {
          "Accept": "application/json;charset=utf-8",
        },
        body: formData,
      };
      fetch("http://192.241.157.30/activity/viewset/gallery/", options)
        .then((res) => res.json())
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  form {
    margin: 12rem auto;
    width: 37rem;
    height: 23rem;
    /* Form outline */
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
      display: flex;
      justify-content: center;
      margin: 0 0 1rem 0;
    }
    .text-section {
      display: flex;
      align-items: center;

      label {
        width: 10rem;
        font-size: 1.3rem;
      }
      input {
        width: 100%;
        padding: 8px 16px;
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

      textarea {
        width: 100%;
        padding: 8px 16px;
        margin: 8px 0 8px 2rem;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
    .submit-btn {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .btn {
        display: inline-block;
        background-color: rgb(179, 2, 2);
        color: #fff;
        font-size: 1.2rem;
        font-weight: 400;
        padding: 0.6rem 1.4rem;
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
    }
  }
}
</style>
