<template>
  <Accordion>
    <AccordionPanel value="0" pt:root="!border-0">
      <AccordionHeader
        pt:root="!rounded-10 !text-black !font-medium !text-sm"
        pt:toggleicon="!text-black"
        >سلام</AccordionHeader
      >
      <AccordionContent pt:content="!rounded-b-10">
        <NuxtLink
          to="/"
          class="text-textsec block mb-2 last:m-0"
          v-for="item in 5"
          >مجله سلام</NuxtLink
        >
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1" pt:root="!border-0 !my-2">
      <AccordionHeader
        pt:root="!rounded-10 !text-black !font-medium !text-sm"
        pt:toggleicon="!text-black"
        >پشتیبانی</AccordionHeader
      >
      <AccordionContent>
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
          sed quia non numquam eius modi.
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2" pt:root="!border-0">
      <AccordionHeader
        pt:root="!rounded-10 !text-black !font-medium !text-sm"
        pt:toggleicon="!text-black"
        >خرید و فروش</AccordionHeader
      >
      <AccordionContent>
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus.
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<script setup></script>
