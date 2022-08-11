<template>
   <div class="container">
    <button @click="myfunc">Click</button>
       
   </div>
</template>

<script>

export default {
    data() {
        return {
            locationId : this.$route.params.slug,
            location: []

        }
        
        // location : []
    },

    methods: {
        myfunc(){
            console.log(this.location)

        }

    },
    mounted() {
        fetch("http://192.241.157.30/activity/viewset/location/" + this.locationId)
        .then((result) => result.json())
        .then((data) => this.location = data)
    }





}
</script>

<style>

</style>