<template>
    <div class="mt-2">
        <ul class="flex gap-5">
            <li v-for="item in sections" :key="item.id" class="flex-1 gap-5 cursor-pointer shadow-xl min-w-[9.375rem]">
                <div class="square items-center flex flex-col justify-center p-5 rounded-xl ">
                    <img :src="item.icon" class="w-10 h-10" />
                    <h2 class="text-white text-nowrap">{{ item.title }}</h2>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import live from "../assets/sections/live.svg";
import bitcoin from "../assets/sections/bitcoin.svg";
import instantwins from "../assets/sections/instantwins.svg";
import scratch from "../assets/sections/scratch.svg";
import slots from "../assets/sections/slots.svg";
import novo from "../assets/sections/new.svg";
import bonus from "../assets/sections/bonus.svg";

interface Section {
    id: number;
    icon: string;
    title: string;
}

const sections: Section[] = [
    { id: 1, icon: slots, title: "Slots" },
    { id: 2, icon: novo, title: "New" },
    { id: 3, icon: bonus, title: "Bonus buy" },
    { id: 4, icon: instantwins, title: "Instant wins" },
    { id: 5, icon: bitcoin, title: "Bitcoin" },
    { id: 6, icon: scratch, title: "Scratch" },
    { id: 7, icon: live, title: "Live" },
];
</script>

<style>
.square {
    background: linear-gradient(to right, #ee0251, #5c02c4);
    transition: background-color 0.9s ease;
}

.square:hover {
    background: linear-gradient(to right, #000000, #8621f8);
}
</style>
