import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDetailsStore = defineStore('details', () => {
    let details = ref([])
    let latitude = ref(0)
    let longitude = ref(0)

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    const setPosition = (position: { coords: { latitude: any; longitude: any } }) => {
        latitude.value = position.coords.latitude;
        longitude.value = position.coords.longitude;
    }

    const showError = (error: any) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        }
    }

    const getDetails = async () => {
        getLocation();
        const res = await axios.get(`https://api.sunrisesunset.io/json?lat=${latitude.value}&lng=${longitude.value}`)

        details.value = res.data.results
        console.log(details.value);
    }

    return { details, latitude, longitude, getLocation, setPosition, showError, getDetails }
})