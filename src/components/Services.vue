<template>
    <section class="py-16 relative overflow-hidden" ref="servicesSection" id="Service">
        <div class="max-w-screen-xl mx-auto px-6 text-center">
            <!-- Title -->
            <Title text="Transform Your Digital Experience" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <!-- Service Card -->
                <div v-for="(service, index) in services" :key="index" :ref="(el) => (servicesCards[index] = el)"
                    class="relative">
                    <div class="bg-ocean bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 hover:scale-105
                        transform transition-all duration-300 border-2 border-transparent hover:border-primary">
                        <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/20
                        rounded-full relative z-10">
                            <font-awesome-icon :icon="service.icon" class="text-3xl text-primary" />
                        </div>
                        <h3 class="text-3xl font-bold text-primary relative z-10">{{ service.title }}</h3>
                        <p class="text-white opacity-80 mt-4 relative z-10">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import Title from '@components/reusable/Title.vue';

const services = [
    {
        icon: ['fas', 'code'],
        title: 'Web Development',
        description: '"Pembuatan website responsif dengan Vue.js, TailwindCSS, dan REST API."'
    },
    {
        icon: ['fas', 'chart-line'],
        title: 'SEO Optimization',
        description: '"Optimasi performa dan struktur website agar mudah ditemukan di Google."'
    },
    {
        icon: ['fas', 'paint-brush'],
        title: 'Branding & Design',
        description: '"Desain visual menarik yang memperkuat identitas digital bisnis Anda."'
    }
];

const servicesCards = ref([]);
const servicesSection = ref(null);

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            gsap.fromTo(servicesSection.value, { opacity: 0 }, { opacity: 1, duration: 2 });
            gsap.fromTo(servicesCards.value,
                { opacity: 0, y: 50, rotation: -15 },
                { opacity: 1, y: 0, rotation: 0, stagger: 0.3, duration: 2, ease: 'power3.out' }
            );
            observer.unobserve(entry.target)
        }
    });
};

onMounted(() => {
    const observer = new IntersectionObserver(observerCallback, { root: null, threshold: 0.2 });
    if (servicesSection.value) {
        observer.observe(servicesSection.value);
    }
})
</script>

<style></style>