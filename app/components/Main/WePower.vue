<template>
  <section class="mt-6 font-yekB">
    <h2 class="container mb-3">داستان کسب و کار ما</h2>
    <swiper
      :slidesPerView="1.5"
      :spaceBetween="5"
      :pagination="{ clickable: true }"
      :free-mode="true"
      :modules="modules"
      class="mySwiper !px-4"
    >
      <swiper-slide class="" v-for="item in 10">
        <article class="relative">
          <img src="/main/hero.svg" class="rounded-10" :alt="item" />
          <div
            class="play flex-center size-[36px] absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 bg-[#C7C7C74D] rounded-full"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.375 15.3591V2.64093C3.375 2.34237 3.69424 2.15433 3.95262 2.3007L15.1774 8.65977C15.4409 8.80901 15.4409 9.19099 15.1774 9.34023L3.95262 15.6993C3.69424 15.8457 3.375 15.6576 3.375 15.3591Z"
                stroke="#E2E2E2"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <p class="text-white text-sm absolute bottom-1 right-2">
            جستجو برای بهترین ها
          </p>
        </article>
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

<style scoped>
.play {
  backdrop-filter: blur(5px) saturate(180%);
  background-color: #c7c7c74d;
}
</style>
