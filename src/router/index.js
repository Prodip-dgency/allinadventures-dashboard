import { createRouter, createWebHistory } from 'vue-router'
import Activity from '../view/activity/Activity.vue'
import Location from '../view/location/Location.vue'
import LocationForm from '../view/location/LocationForm.vue'
import LocationDetail from '../view/location/LocationDetail.vue'
import LocationUpdate from '../view/location/LocationUpdate.vue'
import Gallery from '../view/gallery/Gallery'
import GalleryCreate from '../view/gallery/GalleryCreate'


const routes =[
    { path:'/location/create', name: 'Locationform', component: LocationForm },
    { path:'/', name: 'Activity', component: Activity },
    { path:'/location', name: 'Location', component: Location },
    { path:'/location/:id', name:'Locationdetail', component: LocationDetail },
    { path: '/location/update/:id', name: 'Locationupdate', component: LocationUpdate },

    //Gallery

    { path:'/gallery', name: 'Gallery', component: Gallery },
    { path:'/gallery/create', name:'Gallerycreate', component: GalleryCreate }

]






const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router;