<template>
  <swiper
    :slidesPerView="1.5"
    :spaceBetween="15"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="mySwiper !px-4"
  >
    <swiper-slide class="text-xs" v-for="item in 10">
      <ProductCard />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [FreeMode]
    }
  }
}
</script>

<style scoped>
.bg-surface2 {
  box-shadow: 0 0 20px 0 #00000007;
}
</style>
