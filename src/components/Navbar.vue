<template>
    <div class="relative cardz-30 p-5">
        <!-- Open Menu Button -->
        <button @click="toggleMenu" ref="openButton"
            class="bg-gradient-to-r from-secondary to-primary w-12 h-12 rounded-full p-2 cursor-pointer text-white">
            <font-awesome-icon :icon="['fas', 'bars']" class="font-bold text-xl" />
        </button>

        <nav @click="closeMenu" ref="nav"
            class="fixed top-0 right-[-200vw] w-full bg-[#060b18] flex justify-center items-center h-screen transition-all duration-1000 ease-in-out z-50">
            <button ref="closeButton"
                class="bg-gradient-to-r from-secondary to-primary w-12 h-12 rounded-full p-2 cursor-pointer text-white absolute top-5 left-5 opacity-0 pointer-events-none z-50">
                <font-awesome-icon :icon="['fas', 'xmark']" class="font-bold text-xl" />
            </button>

            <ul class="list-none">
                <li class="my-12" v-for="(item, index) in menuItems" :key="index">
                    <a :href="`#${item.toLocaleLowerCase()}`" @click="closeMenu"
                        class="text-white text-2xl font-medium opacity-0 pointer-events-none transition-opacity"
                        :style="`transitionDelay: ${index * 0.2}s`" ref="menulinks">
                        {{ item }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const menuItems = [
    "Home",
    "Service",
    "Skills",
    "About",
    "Projects",
    "Contact",
];

// Refs for elements
const nav = ref(null);
const openButton = ref(null);
const closeButton = ref(null);
const menulinks = ref([]); // Change to an array to hold multiple refs

// GSAP timeline
let tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } }).pause();

onMounted(() => {
    tl.to(nav.value, { right: 0 })
        .to(nav.value, { height: '100vh' }, '-=.1')
        .to(menulinks.value, { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
        .to(closeButton.value, { opacity: 1, pointerEvents: 'all' }, '-=.8');
});

// Toggle menu function
const toggleMenu = () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.reverse();
    }
};

// Close Menu
const closeMenu = () => {
    tl.reverse();
};

// Set refs for menulinks
onMounted(() => {
    menulinks.value = document.querySelectorAll('nav a');
});
</script>

<style>
/* Add any additional styles here */
</style>