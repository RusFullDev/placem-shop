<script setup>
import { reactive } from 'vue';

const contact = reactive({
    forBuyers: [
        {
            title: 'Покупателям',
            info: [
                'Как это работает',
                'Защита покупателя',
                'Условия оплаты',
                'Условия использования',
                'Регистрация аккаунта'
            ]
        }
    ],
    forSuppliers: [
        {
            title: 'Поставщикам',
            info: [
                'Как стать продавцом',
                'Правила участия',
                'Личный кабинет продавца'
            ]
        }
    ],
    about: [
        {
            title: 'О компании',
            info: [
                'О PlaceMik',
                'Новости',
                'Часто задаваемые вопросы',
                'Служба поддержки',
                'Сообщить о нарушении авторских прав'
            ]
        }
    ],
});

const socials = reactive( 
            [
            '/socials/vk-brands.png',
                '/socials/instagram.png',
                '/socials/Vector.png',
            ]
            )
    
    // footerBottom: [
    //     {
    //         footerLogo: '/socials/Лого.png',
    //         date: '© PlaceMik.ru, 2021'
    //     }
    // ]


</script>

<template>
    <div class="bg-grad">
    <div class="flex gap-[99px] px-10 py-10 pb-8">
        <div v-for="(section, sectionIndex) in contact" :key="sectionIndex">
            <div v-for="(item, itemIndex) in section" :key="itemIndex">
                <a href="">{{ item.title }}</a>
                <div v-for="(inf, infIndex) in item.info" :key="infIndex">
                    <a href="">{{ inf }}</a>
                </div>
            </div>
        </div>
        <div>
            <h3 class="pb-6 text-white">Хотите быть в курсе последних новостей и акций? </h3>
            <div class="flex gap-3 pb-5">
                <input type="text" placeholder="konstantinkonstantinov@yandex.ru" class="w-[260px] h-[35px] border border-white text-center">
            <button class="w-[130px] h-[35px] bg-white">Подписаться</button>
            </div>
            <div>
                <p >Мы в соцсетях</p>
            <div  class="flex gap-2 items-center pt-5">
                <img v-for="item,index in socials" :key="index" :src="item" alt="">
            </div>
        </div>
    </div>
    </div>
    <div class="flex justify-between items-center px-10">
        <img src="/socials/Лого.png" alt="">
        <p>© PlaceMik.ru, 2021</p>
    </div>
    </div>
</template>


