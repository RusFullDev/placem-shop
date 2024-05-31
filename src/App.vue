<script setup>
import Banner from './components/Banner.vue';
import BannerRight from './components/BannerRight.vue';

import Intro from './components/Intro.vue';
import SectionFooter from './components/SectionFooter.vue';
import SectionFooter2 from './components/SectionFooter2.vue';
import SectionNewSale from './components/SectionNewSale.vue';
import SectionSale from './components/SectionSale.vue';
import SectionShop1 from './components/SectionShop1.vue';
import Header from '/src/components/Header.vue'
</script>

<template>
  <div class="container">
<Header/>

  

    <div class="flex gap-x-10">
      <Banner/>
      <BannerRight/> 
    </div>


    <SectionSale/>
    <SectionNewSale/>
    <SectionShop1/>
    <SectionFooter/>
    <SectionFooter2/>

   </div>
</template>

<style scoped>

</style>
