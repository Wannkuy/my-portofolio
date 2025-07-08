<template>
    <section class="py-16 text-white relative overflow-hidden" id="projects">
        <div class="max-w-screen-xl mx-auto px-6 text-center">
            <Title text="My Projects" />

            <nav id="nav" class="mb-8">
                <button
                    class="rounded-full border-2 border-primary text-primary font-semibold py-3 px-6 transition-all duration-300 hover:scale-105"
                    id="prev" @click="rotate('pref')">
                    <font-awesome-icon :icon="['fas', 'angles-left']" />
                </button>

                <button
                    class="ml-2 rounded-full border-2 border-primary text-primary font-semibold py-3 px-6 transition-all duration-300 hover:scale-105"
                    id="next" @click="rotate('next')">
                    <font-awesome-icon :icon="['fas', 'angles-right']" />
                </button>
            </nav>

            <div class="relative flex justify-center">
                <!-- Carousel Container -->
                <div ref="stage"
                    class="w-1/2 h-[400px] relative flex justify-center items-center [transform-style:preserve-3d] mx-auto">
                    <div v-for="(project, index) in projects" :key="index" :style="getCardStyle(index)"
                        class="box absolute w-[200px] h-[250px] transition-transform duration-500 ease-[ease] [transform-origin: 50%_50%_-250px]">
                        <projectCard :title="project.title" :description="project.description" :image="project.image"
                            :link="project.link" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Title from "@components/reusable/Title.vue";
import projectCard from "@components/Projects/projectCard.vue";

const projects = ref([
    {
        title: 'project 1',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: '/project1.jpeg',
        link: '#'
    },
    {
        title: 'project 2',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: '/project2.jpeg',
        link: '#'
    },
    {
        title: 'project 3',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: '/project3.jpeg',
        link: '#'
    },
    {
        title: 'project 4',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: '/project1.jpeg',
        link: '#'
    }, {
        title: 'project 5',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: '/project2.jpeg',
        link: '#'
    }, {
        title: 'project 6',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: '/project3.jpeg',
        link: '#'
    },
])

const stage = ref(null);
const anglesStep = 360 / projects.value.length;
const radius = 250; // Jarak translateZ dari pusat

const initializeCarousel = () => {
    const boxes = document.querySelectorAll('.box');
    const perspective = 1100; // Nilai perspektif

    // Set perspective and 3D transform
    if (stage.value) { // Pastikan stage.value tidak null
        stage.value.style.perspective = `${perspective}px`;
        stage.value.style.transformStyle = 'preserve-3d';
    }


    boxes.forEach((box, index) => {
        const angle = index * anglesStep;
        // transform-origin di CSS harus sesuai dengan radius di sini jika ingin box rotasi dari pusat
        box.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        box.dataset.rotationY = angle;
    })
}

const getCardStyle = (index) => {
    const angle = anglesStep * index;

    return {
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`
    }
}

const rotate = (direction) => {
    const boxes = document.querySelectorAll('.box');
    const rotationChange = direction === 'next' ? anglesStep : -anglesStep;
    boxes.forEach((box) => {
        const currentRotationY = parseFloat(box.dataset.rotationY);
        const newRotationY = currentRotationY + rotationChange;
        box.dataset.rotationY = newRotationY;
        box.style.transform = `rotateY(${newRotationY}deg) translateZ(${radius}px)`;
    })
}

onMounted(() => {
    initializeCarousel();
})
</script>

<style>
#nav {
    text-align: center;
    margin-top: 20px;
}
</style>