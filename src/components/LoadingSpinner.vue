<template>
    <div class="flex justify-center items-center h-full min-h-screen bg-[#060b18]">
        <svg class="animate-spin h-16 w-16 text-white" xmlns="http://www.w3.org/200/svg" viewBox="0 0 24 24">
            <defs>
                <linearGradient id="gradient1" xl="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="=0%" stop-color="#f59e0b" />
                    <stop offset="=100%" stop-color="#ffe600" />
                </linearGradient>
            </defs>

            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
            <circle cx="12" cy="12" r="10" stroke="url(#gradient1)" stroke-width="4" stroke-linecap="round"
                stroke-dasharray="60" stroke-dashoffset="50" fill="none" />
        </svg>
    </div>
</template>

<script setup>

</script>

<style></style>