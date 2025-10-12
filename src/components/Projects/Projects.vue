<template>
  <section class="py-16 text-white relative overflow-hidden" id="projects">
    <div class="max-w-screen-xl mx-auto px-6 text-center">
      <Title text="My Projects" />

      <nav id="nav" class="mb-8">
        <button
          class="rounded-full border-2 border-primary text-primary font-semibold py-3 px-6 transition-all duration-300 hover:scale-105"
          id="prev"
          @click="rotate('prev')"
        >
          <font-awesome-icon :icon="['fas', 'angles-left']" />
        </button>

        <button
          class="ml-2 rounded-full border-2 border-primary text-primary font-semibold py-3 px-6 transition-all duration-300 hover:scale-105"
          id="next"
          @click="rotate('next')"
        >
          <font-awesome-icon :icon="['fas', 'angles-right']" />
        </button>
      </nav>

      <div class="relative flex justify-center">
        <!-- Carousel Container -->
        <div
          ref="stage"
          class="w-1/2 h-[400px] relative flex justify-center items-center [transform-style:preserve-3d] mx-auto"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            :style="getCardStyle(index)"
            class="box absolute w-[200px] h-[250px] transition-transform duration-500 ease-[ease] [transform-origin:50%_50%_-250px]"
          >
            <projectCard
              :title="project.title"
              :description="project.description"
              :image="project.image"
              :link="project.link"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Title from "@components/reusable/Title.vue";
import projectCard from "@components/Projects/projectCard.vue";

const projects = ref([
  {
    title: "Portofolio",
    description: "Website Portofolio Muhammad Agus Kurniawan",
    image: "/portofolio.png",
    link: "#",
  },
  {
    title: "Outlet Pintar",
    description: "Website yang digunakan untuk sistem transaksi digital",
    image: "/OP.jpg",
    link: "#",
  },
  {
    title: "Management Gudang",
    description: "Website yang berfungsi untuk mengelola gudang",
    image: "/weberp.svg",
    link: "#",
  },
  {
    title: "Pesona Trip",
    description:
      "Website pemesanan paket wisata Indonesia: alam, budaya, kuliner, petualangan.",
    image: "/Home.svg",
    link: "#",
  },
  {
    title: "Leading Page PLN",
    description: "Petunjuk Penggunaan Voucher di PLN Mobile",
    image: "/leandingpagepln.jpg",
    link: "#",
  },
  {
    title: "Jasanya Tech",
    description: "Sebuah profile company dari jasanyateech.id",
    image: "/webjasanya.jpg",
    link: "#",
  },
]);

const stage = ref(null);
const anglesStep = 360 / projects.value.length;
const radius = 100; // Jarak translateZ dari pusat
let autoRotateInterval = null; // simpan interval agar bisa dihentikan

const initializeCarousel = () => {
  const boxes = document.querySelectorAll(".box");
  const perspective = 1100;

  if (stage.value) {
    stage.value.style.perspective = `${perspective}px`;
    stage.value.style.transformStyle = "preserve-3d";
  }

  boxes.forEach((box, index) => {
    const angle = index * anglesStep;
    box.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    box.dataset.rotationY = angle;
  });
};

const getCardStyle = (index) => {
  const angle = anglesStep * index;
  return {
    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
  };
};

const rotate = (direction = "next") => {
  const boxes = document.querySelectorAll(".box");
  const rotationChange = direction === "next" ? anglesStep : -anglesStep;
  boxes.forEach((box) => {
    const currentRotationY = parseFloat(box.dataset.rotationY);
    const newRotationY = currentRotationY + rotationChange;
    box.dataset.rotationY = newRotationY;
    box.style.transform = `rotateY(${newRotationY}deg) translateZ(${radius}px)`;
  });
};

const startAutoRotate = () => {
  stopAutoRotate(); // pastikan tidak ada interval ganda
  autoRotateInterval = setInterval(() => {
    rotate("next");
  }, 3000); // ganti 3000 -> 5000 kalau mau lebih lambat
};

const stopAutoRotate = () => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
    autoRotateInterval = null;
  }
};

onMounted(() => {
  initializeCarousel();
  startAutoRotate();

  // Hentikan auto-rotate sementara kalau user hover di area stage
  if (stage.value) {
    stage.value.addEventListener("mouseenter", stopAutoRotate);
    stage.value.addEventListener("mouseleave", startAutoRotate);
  }
});

onBeforeUnmount(() => {
  stopAutoRotate();
});
</script>

<style>
#nav {
  text-align: center;
  margin-top: 20px;
}
</style>
