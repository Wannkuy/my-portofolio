<template>
    <h1 class="matrix-text text-3xl lg:text-5xl font-bold mt-8 mb-20" ref="title" :data-text="text">
        {{ text }}
    </h1>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { animateWavyText } from "@utils/animation";
import '@assets/style.css';
const props = defineProps({
    text: { // Sepertinya ini nama properti, tapi nilainya terpotong. Asumsi 'text' atau sejenisnya.
        type: String,
        default: ''
    }
});

const title = ref(null);

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateWavyText(title.value, 0.3);
            observer.unobserve(entry.target);
        }
    });
};

onMounted(() => {
    const observer = new IntersectionObserver(observerCallback, { root: null, threshold: 0.2 });
    if (title.value) {
        observer.observe(title.value);
    }
});
</script>

<style></style>
