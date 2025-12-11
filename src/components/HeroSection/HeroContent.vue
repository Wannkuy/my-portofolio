<template>
    <article class="max-w-[660px] mx-auto lg:mx-0">
        <header
            class="text-white capitalize font-bold leading-[100px] mb-[10px] text-4xl md:text-5xl lg:mb-[10px] lg:leading-[75px] md:leading-[45px] text-center lg:text-start"
            ref="textTitle">
            <span class="block text-primary">Hello I'am</span>
            <span class="matrix-text" data-text="Muhammad Zain Al Zafid">Muhammad Zain Al Zafid</span>

            <h2 class="text-secondary text-[32px] capitalize font-semibold leading-[39px] mb-[20px] lg:text-[28px] md:text-[22px] md:mb-[10px] text-center lg:text-start"
                ref="subTitle">
                Analyst Data
            </h2>

            <p class="text-white text-[19px] font-normal leading-[33px] mb-[30px]" ref="textDescription">
                Saya memiliki keterampilan yang kuat dalam mengolah, menganalisis, dan menerjemahkan data kompleks menjadi
                wawasan bisnis yang strategis dan mudah dipahami. Dengan pemahaman mendalam tentang SQL, Excel, dan berbagai
                tool visualisasi data. Sebagai Data Analyst, saya fokus pada pengumpulan data, pemodelan statistik, dan
                pembuatan laporan interaktif untuk mendukung pengambilan keputusan. Saya percaya bahwa analisis yang efektif
                adalah hasil kolaborasi yang erat antara pemangku kepentingan, tim operasional, dan manajemen.
            </p>
        </header>

        <footer class="flex justify-center lg:justify-start" ref="buttonContainer">
            <Button label="Hire Me" />
            <a href="https://drive.google.com/file/d/1D_oFxXNQxvEse4RCb3fkF95SutCjeo8Y/view?usp=sharing" download
                class="ml-4 rounded-full border-2 border-primary font-semibold py-3 px-6 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-primary">
                <font-awesome-icon :icon="['fas', 'download']" />
                <span>Download CV</span>
            </a>

        </footer>
    </article>
</template>
  

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { animateWavyText } from '@utils/animation';
import Button from '@components/reusable/Button.vue';
import '@assets/style.css';

const textTitle = ref(null);
const subTitle = ref(null);
const textDescription = ref(null);
const buttonContainer = ref(null);
onMounted(() => {
    animateWavyText(textTitle.value, 0.3);
    animateWavyText(textTitle.value, 0.6);
    animateWavyText(textTitle.value, 1);
    gsap.from(buttonContainer.value, {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: 'power2.out',
        delay: 1.5
    })
})
</script>

<style></style>