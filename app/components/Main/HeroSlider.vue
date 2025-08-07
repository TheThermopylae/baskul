<template>
  <swiper
    :pagination="true"
    :space-between="10"
    :modules="modules"
    class="mySwiper !my-4"
  >
    <swiper-slide v-for="item in 5">
      <img src="/main/hero.svg" alt="img" class="w-full" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style scoped>
:deep(.swiper-pagination) {
  width: fit-content !important;
  justify-content: flex-end !important;
  background: #7f7f7f59 !important;
  border-radius: 9999px;
  left: 5px !important;
  padding: 3px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 6px !important;
  height: 6px !important;
  background: white !important;
  opacity: 1 !important;
  transition: all 150ms;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ff4800 !important;
  width: 12px !important;
  border-radius: 9999px !important;
  transition: all 150ms;
}
</style>
