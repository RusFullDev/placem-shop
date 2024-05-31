<script>
export default {
    setup() {


        return {}
    }
}
</script>
<template>
    <div class="mb-5">
    <div class="flex justify-end gap-[31%] mt-4">
        <div class="flex items-center gap-5">
            <div class="flex items-center gap-1">
                <p>Покупателям</p> <img src="/img/down-arrow-line-symbol.png" alt="">
            </div>
            <div class="flex items-center gap-1">
                <p>Поставщикам</p> <img src="/img/down-arrow-line-symbol.png" alt="">
            </div>
            <p>Частые вопросы</p>
        </div>
        <div class="flex items-center gap-2">
            <img src="/img/Flag Ru.png" alt="">
            <p>Русский</p>
            <div class="flex items-center gap-1">
                <p>₽</p>
                <img src="/img/down-arrow-line-symbol.png" alt="">
            </div>
        </div>
    </div>

    <div class="flex justify-between gap-10">
        <div class="grid grid-cols-2 place-items-center">
           <div class="p-6 bg-grad "> <img src="/icon/gap.svg" alt="" class="w-full"></div>
            <img src="/img/Лого.png" alt=""  >
        </div>
        <div class="grid place-items-center  ">
            <div class="border border-[#F64D4D] w-[624px] h-[46px] relative items-center px-1 py-1">
                <button class="w-[96px] h-[38px] bg-[#3455D8] items-center">Везде</button>
                <img src="/img/down-arrow-line-symbol.png" alt="" class="absolute z-[10] top-1/2 left-[75px]">
                <img src="/public/img/search-interface-symbol.png" alt="" class="absolute z-[10] right-5 top-1/4">
            </div>
        </div>

        <div class="grid grid-cols-3 place-items-center gap-8">
            <img src="/img/Войти.png" alt="" class="">
            <img src="/img/Избранное.png" alt="" class="">
            <img src="/img/Корзина.png" alt="" class="">
        </div>
    </div>

</div>
</template>



<style lang="scss" scoped></style>