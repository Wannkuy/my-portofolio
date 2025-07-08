<template>
    <section class="mi-h-screen flex items-center justify-center relative overflow-hidden p-4" id="contact">
        <!-- Contact Form -->
        <div class="relative z-10 bg-ocean bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl p-8 max-w-md w-full">
            <Title text="Contact Me" class="text-center mb-6" />
            <form class="space-y-6">
                <!-- Name Field -->
                <div class="relative">
                    <input type="text" id="name" class="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 focus:border-primary
                    focus:outline-none text-white placeholder-transparent" required />
                    <label for="name" class="absolute left-0 text-gray-400 transition-all duration-300 pointer-events-none">
                        Name
                    </label>
                </div>

                <!-- Email Field -->
                <div class="relative">
                    <input type="email" id="email" class="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 focus:border-primary
                    focus:outline-none text-white placeholder-transparent" required />
                    <label for="email"
                        class="absolute left-0 text-gray-400 transition-all duration-300 pointer-events-none">
                        Email
                    </label>
                </div>

                <!-- Message Field -->
                <div class="relative">
                    <textarea id="message" class="w-full px-4 py-2 bg-transparent border-b-2 border-gray-600 focus:border-primary
                    focus:outline-none text-white placeholder-transparent" required rows="4"></textarea>
                    <label for="message"
                        class="absolute left-0 text-gray-400 transition-all duration-300 pointer-events-none">
                        Message
                    </label>
                </div>

                <!-- Submit Button -->
                <Button label="Send Message" />
            </form>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from "gsap";
import Title from "@components/reusable/Title.vue"
import Button from "@components/reusable/Button.vue"

onMounted(() => {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            const label = input.nextElementSibling;
            gsap.to(label, {
                top: '-12px',
                fontSize: '12px',
                color: '#a78bfa',
                duration: 0.3
            });
        });

        input.addEventListener('blur', () => {
            const label = input.nextElementSibling;
            if (!input.value) {
                gsap.to(label, {
                    top: '8px',
                    fontSize: '16px',
                    color: '#9ca3af',
                    duration: 0.3
                });
            }
        });
    });
});
</script>

<style scoped>
@media (max-width: 640px) {
    .mi-h-screen {
        padding: 2rem 1rem;
        /* Add padding for smaller screens */
    }

    .bg-ocean {
        background-color: rgba(0, 0, 0, 0.5);
        /* Adjust background for better visibility */
    }

    input,
    textarea {
        font-size: 1rem;
        /* Adjust font size for smaller screens */
    }

    label {
        font-size: 14px;
        /* Adjust label font size */
    }
}
</style>
