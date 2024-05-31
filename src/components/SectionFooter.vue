
<script setup>
import { reactive } from 'vue';

const product = reactive(
    [
       { 
        img:'/footer/boy 9.png',
        newPrice:'1 999 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 01 градиент'
        },
        { 
        img:'/footer/boy 9 (1).png',
        newPrice:'3 179 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 01 градиент',
        },
        { 
        img:'/footer/boy 9 (2).png',
        newPrice:'1 375 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 01 градиент',
        },
        { 
        img:'/footer/boy 9 (3).png',
        newPrice:'599 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 01 градиент',
        },
        { 
        img:'/footer/boy 9 (4).png',
        newPrice:'599 ₽',
        info:'Футболка с дизайнерским принтом Super Shape 01 градиент',
        }
        ])
</script>



<template>
    <div class="mt-[50px] bg-indigo-400 bg-opacity-10 h-[334px]">
        <h1 class="pb-5 pt-7 font-normal text-[28px] leading-8 text-black pl-5">Ранее вы смотрели</h1>
        <div class="flex items-center justify-between gap-2 mb-5 ">
            <div v-for="item,index in product" class=" h-[181px] w-[241px]" >
                <div class="shadow-md bg-white items-center px-3 flex gap-5 py-9">
                    <img :src="item.img" alt="" >
                    <div class=" ">
                        <p class="text-black text-xs font-light text-start">{{ item.info }}</p>
                        <p class="text-black font-medium text-sm"> от {{ item.newPrice }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>