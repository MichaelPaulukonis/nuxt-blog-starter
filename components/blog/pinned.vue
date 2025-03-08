<template lang="pug">
ul.grid.grid-cols-10.gap-4.text-typography_primary
    li.col-span-full.md--col-span-5.relative.rounded-md.border-typography_primary.hover--border-brand_primary.group(v-for="article in data" :key="article._path")
        NuxtLink.p-4.block.relative(:to="article._path + '/'")
            .wrapper
                header
                    img(:src="article.socialImage.src" :alt="article.headline" class="rounded-md")
                    .pinned__title.font-serif.text-h3.leading-h3.font-semibold.group-hover--text-brand_primary {{ article.headline }}
                    .pinned__excerpt {{ article.excerpt }}
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
/* .pinned__title {
  font-family: Tiempos Headline, Arial, sans-serif;
  color: #030303;
  padding-top: 1rem;
  font-size: 2.5rem;
  -webkit-transition: color .3s;
  transition: color .3s
} */

.pinned__title {
    display: block;
    padding: 2px 8px;
    background-color: #7d5cff;
    color: #fcfcfc;
}

.pinned__excerpt {
    /* margin: 0; */
    padding: 2px 8px;
    background: #38ef7d;
    color: #000;
    display: block
}
</style>