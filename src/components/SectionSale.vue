
<script setup>
import { reactive } from 'vue';

const product = reactive(
    [
       { 
        img:'/prodict1/boy 2.png',
        newPrice:'1 999 ₽',
        oldPrice:'2 499 ₽',
        info:'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/boy 1.png',
        newPrice:'3 179 ₽',
        oldPrice:'1 999 ₽',
        info:'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/hat 1.png',
        newPrice:'1 375 ₽',
        oldPrice:'1 999 ₽',
        info:'Бейсболка с дизайнерским принтом Super Shape 01 белая',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/phone 1.png',
        newPrice:'599 ₽',
        oldPrice:'990 ₽',
        info:'Чехол для iphone 12 с дизайнерским принтом Super Shape 03',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/phone 2.png',
        newPrice:'599 ₽',
        oldPrice:'990 ₽',
        info:'Чехол для iphone 12 с дизайнерским принтом Super Shape 05',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/boy 5.png',
        newPrice:'2 399 ₽',
        oldPrice:'3 790 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 06 абстракция',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/hat 2.png',
        newPrice:'1 375 ₽',
        oldPrice:'2 499 ₽',
        info:'Бейсболка с дизайнерским принтом Super Shape 02 абстракция',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/phone 13 1.png',
        newPrice:'599 ₽',
        oldPrice:'990 ₽',
        info:'Чехол для iphone 12 с дизайнерским принтом Super Shape 03',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/phone 4.png',
        newPrice:'599 ₽',
        oldPrice:'990 ₽',
        info:'Чехол для iphone 12 с дизайнерским принтом Super Shape 02',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/boy 3.png',
        newPrice:'3 179 ₽',
        oldPrice:'1 999 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
        discount:'/prodict1/Скидка_red25%.png'
        },
        
        { 
        img:'/prodict1/phone 6.png',
        newPrice:'599 ₽',
        oldPrice:'990 ₽',
        info:'Чехол для iphone 12 с дизайнерским принтом Super Shape 06',
        discount:'/prodict1/Скидка_red25%.png'
        },
        { 
        img:'/prodict1/boy 6.png',
        newPrice:'2 399 ₽',
        oldPrice:'3 790 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 06 абстракция',
        discount:'/prodict1/Скидка_red25%.png'
        },
        
    ]
)
</script>

<template>
    <div class="my-7">
<h1 class="pb-5 font-normal text-[28px] leading-8 text-black pl-5">Успей купить</h1>
<div class="grid grid-cols-6 gap-5 mb-5">
<div v-for="item,index in product" class="" >
    <div class="shadow-md bg-white items-center w-full h-full px-3 py-3">
    <img :src="item.img" alt="" class="w-[100%]">
    <div class="flex gap-2">
        <p class="text-[#FF4343] font-medium text-sm">{{ item.newPrice }}</p>
        <p class="text-[#464646] font-normal text-xs line-through">{{ item.oldPrice }}</p>
    </div>
    <p class="text-black text-xs font-light text-start">{{ item.info }}</p>
</div>
</div>
</div>
<div class="flex pl-[1030px]">
    <button class="text-black font-medium text-sm w-[187px] h-[44px] border-2 border-violet-700">Все товары</button>
    </div>
    </div>
</template>



<style lang="scss" scoped>

</style>