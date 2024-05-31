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

const socials = reactive({
    socials: [
        {
            title: 'Мы в соцсетях',
            social: [
                '/socials/Vector.png',
                '/socials/instagram.png',
                '/socials/vk-brands.png'
            ]
        }
    ],
    footerBottom: [
        {
            footerLogo: '/socials/Лого.png',
            date: '© PlaceMik.ru, 2021'
        }
    ]
})

</script>

<template>
    <div class="flex gap-[99px] px-5">
        <div v-for="(section, sectionIndex) in contact" :key="sectionIndex">
            <div v-for="(item, itemIndex) in section" :key="itemIndex">
                <a href="">{{ item.title }}</a>
                <div v-for="(inf, infIndex) in item.info" :key="infIndex">
                    <a href="">{{ inf }}</a>
                </div>
            </div>
        </div>
    </div>
</template>


