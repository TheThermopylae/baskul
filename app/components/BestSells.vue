<template>
  <section class="bg-primary rounded-[20px] mt-6 pb-3">
    <div class="flex justify-between items-center text-white p-3">
      <h2>محصولات پرفروش</h2>
      <NuxtLink to="/" class="flex items-center gap-2 text-xs">
        همه
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.875 1L1.41955 5.39393C1.36015 5.45251 1.36015 5.54749 1.41955 5.60607L5.875 10"
            stroke="#FDFDFD"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </NuxtLink>
    </div>
    <BestSellsSlider />
  </section>
</template>
