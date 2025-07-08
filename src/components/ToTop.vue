<template>
    <button v-if="showButton" class="bg-gradient-to-r from-secondary to-primary fixed buttom-8 right-8 text-white rounded-full
    chadow-lg hover:bg-primary w-12 h-12 flex items-centerjustify-center">
        <font-awesome-icon :icon="['fas', 'angles-up']" />
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

const checkScrollPosition = () => {
    showButton.value = window.scrollY > 300;
}

onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition)
})

onMounted(() => {
    window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style></style>