<template>
    <div>
        <h3 class="text-2xl font-bold mb-4">Education</h3>
        <ul class="space-y-4">
            <li v-for="(item, index) in education" :key="index" class="text-lg relative">
                <div class="bg-ocean bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 hover:scale-105
            transform transition-all duration-300 border-2 border-transparent hover:border-primary">
                    <h3 class="text-xl font-bold text-primary relative z-10">
                        {{ item.degree }} - {{ item.institution }}
                    </h3>
                    <span class="block text-sm text-white">{{ item.year }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const education = ref([
    {
        degree: 'Bachelor in Information Systems',
        institution: 'Universitas Bina Sarana Informatika',
        year: '2021 - 2025',
    },
]);
</script>
  