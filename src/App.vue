<template>
  <div>
    <div>
      <Suspense>
        <template #default>
          <div>
            <ThreeBackground />
            <Navbar />
            <HeroSection />
            <Services />
            <!-- <Skills /> -->
            <About />
            <!-- <Projects /> -->
            <Contact />
            <Footer />
            <ToTop />
          </div>
        </template>
        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LoadingSpinner from '@components/LoadingSpinner.vue';
const ThreeBackground = defineAsyncComponent(() =>
  import('@components/ThreeBackground.vue') // Perbaikan di sini
);
const Navbar = defineAsyncComponent(() =>
  import('@components/Navbar.vue') // Perbaikan di sini
);
const HeroSection = defineAsyncComponent(() =>
  import('@components/HeroSection/HeroSection.vue') // Perbaikan di sini
);
const Services = defineAsyncComponent(() =>
  import('@components/Services.vue') // Perbaikan di sini
);
const Skills = defineAsyncComponent(() =>
  import('@components/Skills.vue') // Perbaikan di sini
);
const About = defineAsyncComponent(() =>
  import('@components/About/About.vue') // Perbaikan di sini
);
const Projects = defineAsyncComponent(() =>
  import('@components/Projects/Projects.vue') // Perbaikan di sini
);
const Contact = defineAsyncComponent(() =>
  import('@components/Contact.vue') // Perbaikan di sini
);
const Footer = defineAsyncComponent(() =>
  import('@components/Footer.vue') // Perbaikan di sini
);
const ToTop = defineAsyncComponent(() =>
  import('@components/ToTop.vue') // Perbaikan di sini
);
</script>

<style></style> 