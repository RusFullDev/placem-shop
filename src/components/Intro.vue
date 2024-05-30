    
    <script setup>
    import { reactive,ref } from 'vue';
    const category = reactive([
        {
img:'/img/laptop 1.png',
title:'Компьютеры и оргтехника'

        },
        {
img:'/img/power-plug 1.png',
title:'Электроника'

        },
        {
img:'/img/microwave 1.png',
title:'Бытовая техника'

        },
        {
img:'/img/t-shirt 1.png',
title:'Одежда для женщин'

        },
        {
img:'/img/t-shirt 1.png',
title:'Одежда для мужчин'

        },
        {
img:'/img/baby-boy 1.png',
title:'Все для детей'

        },
        {
img:'/img/steering-wheel 1.png',
title:'Автотовары'

        },
        {
img:'/img/lotus 1.png',
title:'Красота и здоровье'

        },
        {
img:'/img/ball 1.png',
title:'Спорт и развлечения'

        },

    ])
   
    </script>

    
    
    <template>
        <div class="shadow bg-white w-[296px]  ">
            <div class="bg-grad px-7">
                <div class="flex gap-2 py-[10px] items-center">
                    <img src="/public/img/menu (2).png" alt="">
                    <h2 class="text-white">Популярные категории</h2>
                </div>
            </div>
            <div class="px-6">
<div v-for="item,index in category" :key="index">
    <div class="flex gap-2 py-2">
        <img :src="item.img" alt="">
        <h3 >{{ item.title}}</h3>

    </div>
</div>
       
           <div>
            <div class="flex gap-1 items-center pb-3 pt-[18px]">
                <h3>Все категории</h3>
                <img src="/img/down-arrow-line-symbol.png" alt="">
            </div>
           </div>
        </div>
        </div>
    </template>
    
    
    
    <style lang="scss" scoped>
    
    </style>