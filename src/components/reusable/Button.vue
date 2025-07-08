<template>
    <button @mouseenter="animateButton" class="relative overflow-visible outline-none border-none rounded-full px-4 py-1 md:px-8
      md:py-3 bg-gradient-to-r from-secondary to-primary text-white font-bold text-lg transition-all
      duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_#1D2853,0_0_40px_#FFE600] min-w-[100px]">
        <span :class="`${buttonStyle} relative z-10 text-shadow`">
            {{ label }}
        </span>

        <svg viewBox="0 0 100 50" preserveAspectRatio="none"
            class="absolute top-1/2 left-[15%] w-[70%] transform -translate-y-1/2 z-0 overflow-visible">
            <polyline ref="wibble" stroke="rgba(255,255,255,0.5)" fill="none" stroke-width="45" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
    label: {
        type: String,
        required: true // Menandakan bahwa label adalah properti yang wajib
    },
    buttonStyle: {
        type: String,
        default: ""
    },
});

const wibble = ref(null);
const pointsArray = ref([]);
const isAnimating = ref(false);

// Initialize SVG points
const initializePoints = () => {
    // Perbaikan di sini: Akses ownerSVGElement dari polyline
    const svg = wibble.value.ownerSVGElement;
    const width = 100;
    const points = 30; // Jumlah titik
    const spacing = width / points;

    // Bersihkan pointsArray sebelum mengisi ulang, untuk menghindari duplikasi jika initializePoints dipanggil ulang
    pointsArray.value = [];

    for (let i = 0; i < points; i++) {
        const point = svg.createSVGPoint();
        point.x = i * spacing;
        point.y = 25; // Posisi Y tengah
        pointsArray.value.push(point);
    }
    // Set points pada polyline
    wibble.value.points.clear(); // Bersihkan poin yang ada
    pointsArray.value.forEach(p => wibble.value.points.appendItem(p));
};

// Animate button on hover
const animateButton = () => {
    if (isAnimating.value) return;
    isAnimating.value = true;

    // Pastikan pointsArray tidak kosong sebelum animasi
    if (pointsArray.value.length === 0) {
        initializePoints(); // Panggil ulang jika kosong (misalnya karena hot reload)
    }

    pointsArray.value.forEach((point, index) => {
        const mapper = gsap.utils.mapRange(0, pointsArray.value.length - 1, 0, 0.4); // Menggunakan length - 1 untuk range yang benar
        const duration = 0.6;

        gsap.to(point, {
            keyframes: [
                { y: '+=6', ease: 'power2.inOut' }, // Menggunakan ease yang umum untuk efek gelombang
                { y: '-=12', ease: 'power2.inOut' },
                { y: '+=6', ease: 'power2.inOut' },
            ],
            duration: duration,
            delay: mapper(index), // Gunakan mapper untuk delay stagger
            onComplete: () => {
                // Periksa apakah ini adalah titik terakhir yang dianimasikan
                // dan semua animasi sudah selesai sebelum mengatur isAnimating ke false
                const allAnimationsComplete = pointsArray.value.every(p => !gsap.isTweening(p));
                if (allAnimationsComplete) {
                    isAnimating.value = false;
                }
            }
        });
    });
};

onMounted(() => {
    initializePoints();
});
</script>

<style scoped>
/* Tambahkan gaya untuk text-shadow sesuai desain yang Anda miliki */
.text-shadow {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4);
}
</style>