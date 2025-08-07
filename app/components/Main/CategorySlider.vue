<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="15"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="mySwiper !px-4 !pb-10 !mt-6"
  >
    <swiper-slide class="text-xs !w-fit" v-for="item in 10">
      <article class="size-[55px] text-center">
        <div
          class="w-full aspect-square mb-2 bg-surface2 flex-center rounded-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="2">
              <path
                stroke-linejoin="round"
                d="M2.31 11.243A1 1 0 0 1 3.28 10h17.44a1 1 0 0 1 .97 1.242l-1.811 7.243A2 2 0 0 1 17.939 20H6.061a2 2 0 0 1-1.94-1.515z"
              />
              <path
                stroke-linecap="round"
                d="M9 14v2m6-2v2m-9-6l4-6m8 6l-4-6"
              />
            </g>
          </svg>
        </div>
        <h4 class="w-[55px] break-words">قسطی</h4>
      </article>
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
