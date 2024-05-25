<template>
    <div class="bg-gradient-to-t from-yellow-primary from-10% via-pink-primary via-40% to-teal-primary to-90% lg:max-w-screen-sm h-screen lg:mx-auto">
        <div class="lg:max-w-screen-sm lg:mx-auto">
            <img src="../assets/sun.png" alt="" class="absolute top-96 left-32 lg:left-[600px] w-32">
            <img src="../assets/Group 248.png" alt="" class="absolute bottom-0 h-1/3 w-full lg:w-[640px]">
            <img src="../assets/Group 247.png" alt="" class="absolute right-0 lg:right-[449px] bottom-0 h-1/2">
            <img src="../assets/trees.png" alt="" class="absolute bottom-0 h-1/4 w-full lg:w-[640px]">
        </div>
        <div class="text-yellow-primary font-bold font-opensans">
            <div class="text-center p-20">
                <p class="text-6xl">{{ time }}</p>
                <p class="text-xl">{{ detailsStore.details.date }}</p>
            </div>
            <div class="mt-4 px-4 py-2 bg-black/30 rounded-xl h-fit w-1/2 mx-auto text-sm text-center">
                <p>Sunrise: {{ detailsStore.details.sunrise }}</p>
                <p>Sunset: {{ detailsStore.details.sunset }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useDetailsStore } from '../stores/details.ts'

const detailsStore = useDetailsStore();
const time = ref(new Date().toLocaleTimeString());

const updateTime = () => {
  time.value = new Date().toLocaleTimeString();
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(updateTime, 1000);
  detailsStore.getDetails();
});

</script>