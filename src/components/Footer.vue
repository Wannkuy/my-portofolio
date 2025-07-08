<template>
    <footer class="mt-8 border bg-ocean bg-opacity-40 text-white">
        <div class="container p-12 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div class="flex flex-col justify-between md:col-span-1">
                <img src="/Logo.png" alt="Logo" class="rounded-full w-32 h-32 object-cover mb-4 border border-primary"
                    ref="Logo" />
                <p class="text-sm">&copy; {{ new Date().getFullYear() }} All rights reserved.</p>
            </div>

            <div>
                <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:underline">Home</a></li>
                    <li><a href="#" class="hover:underline">About Us</a></li>
                    <li><a href="#" class="hover:underline">Services</a></li>
                    <li><a href="#" class="hover:underline">Blog</a></li>
                    <li><a href="#" class="hover:underline">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-xl font-semibold mb-4">Connect With Us</h3>
                <div class="flex space-x-4">
                    <a href="https://www.instagram.com/wan_sky15" class="hover:opacity-75 text-white" target="_blank"
                        rel="noopener noreferrer" aria-label="Instagram">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="w-6 h-6" />
                    </a>

                    <a href="https://twitter.com/YahWann15" class="hover:opacity-75 text-white" target="_blank"
                        rel="noopener noreferrer" aria-label="Twitter">
                        <font-awesome-icon :icon="['fab', 'twitter']" class="w-6 h-6" />
                    </a>

                    <a href="https://www.linkedin.com/in/wann-kurniawan-15614132a/" class="hover:opacity-75 text-white"
                        target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="w-6 h-6" />
                    </a>

                    <a href="https://wa.me/085695573510" class="hover:opacity-75 text-white" target="_blank"
                        rel="noopener noreferrer" aria-label="WhatsApp">
                        <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div class="md:col-span-1">
                <h3 class="text-xl font-semibold mb-4">Stay Updated</h3>
                <p class="text-sm mb-4">Subscribe to our newsletter for the latest news and offers!</p>
                <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-2">
                    <input type="email" v-model="email" placeholder="Your email address"
                        class="p-3 rounded-md border border-gray-300 text-gray-800 flex-grow" required />
                    <button type="submit"
                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">
                        Subscribe
                    </button>
                </form>
                <p v-if="message" class="mt-2 text-sm">{{ message }}</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const message = ref('');

const subscribeNewsletter = () => {
    // Logic for subscribing to the newsletter
    message.value = "Thank you for subscribing!";
};
</script>

<style></style>