<template>
  <section class="mt-6 font-yekB">
    <h2 class="container mb-2">بلاگ</h2>
    <swiper
      :slidesPerView="1.5"
      :spaceBetween="10"
      :pagination="{ clickable: true }"
      :modules="modules"
      :free-mode="true"
      class="mySwiper !px-4 !pb-10"
    >
      <swiper-slide class="" v-for="item in 10">
        <MainBlogCard />
      </swiper-slide>
    </swiper>
  </section>
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
