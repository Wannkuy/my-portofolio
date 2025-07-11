<template>
    <section class="py-16 text-white relative overflow-hidden" ref="skillsSection" id="skills">
        <div class="max-w-screen-xl mx-auto px-6 text-center">
            <Title text="My Skills" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div v-for="(skill, index) in skills" :key="index" class="flex flex-col items-center justify-center">
                    <div class="relative w-36 h-36">
                        <!-- SVG Circle -->
                        <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                            <!-- Background Circle -->
                            <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" stroke-width="8" fill="none" />
                            <!-- Animated Progres Circle -->
                            <circle cx="50" cy="50" r="40" stroke="url(#gradient)" stroke-width="8" fill="none"
                                stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="251.2"
                                :ref="(el) => (skillsCircles[index] = el)" />
                            <!-- Gradient -->
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#ffe600" />
                                    <stop offset="100%" stop-color="#17bbab" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <!-- Percentage Label -->
                        <span class="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                            {{ skill.percentage }}%
                        </span>
                    </div>
                    <!-- Skill Name -->
                    <h3 class="text-xl font-bold mt-4">{{ skill.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import Title from '@components/reusable/Title.vue';

const skills = ref([
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 95 },
    { name: 'PHP', percentage: 70 },
    { name: 'Canva', percentage: 95 },
    { name: 'Vue.js', percentage: 80 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Tailwind css', percentage: 80 },
    { name: 'Figma', percentage: 85 },
    { name: 'Python', percentage: 60 },
    { name: 'Git & GitHub', percentage: 85 },
    { name: 'REST API Integration', percentage: 80 },
    { name: 'UI/UX Design Principles', percentage: 85 },
    { name: 'Responsive Design', percentage: 90 },
    { name: 'Agile Workflow', percentage: 70 },
])

const skillsCircles = ref([]);

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const circle = entry.target;
            const index = skillsCircles.value.indexOf(circle);

            gsap.to(circle, {
                strokeDashoffset: (1 - skills.value[index].percentage / 100) * 251.2,
                duration: 5,
                ease: 'power3.out'
            });
            observer.unobserve(circle)
        }
    });
};

onMounted(() => {
    const observer = new IntersectionObserver(observerCallback, { root: null, threshold: 0.2 });
    skillsCircles.value.forEach((circle) => {
        if (circle) {
            observer.observe(circle)
        }
    })
})
</script>

<style></style>