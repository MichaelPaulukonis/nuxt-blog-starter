<template lang="pug">
.page-index.container.mx-auto.px-4.py-8
    .bio
    h1.text-title.leading-title.mt-8.mb-4 Michael Paulukonis

    .sectionhead.inline-block.bg-primary.text-white.leading-tight.antialiased.text-left.font-bold.p-2.text-2xl.font-serif
        | I am a developer/architect and digital artist living in Framingham, MA

    .mt-8
        .sectionhead.inline-block.bg-primary.text-white.leading-tight.antialiased.text-left.font-bold.p-2.text-2xl.font-serif
        | external sites

        ul.inline-list.list-none.m-0.p-0
            li.inline-block.leading-none.pl-5(v-for="site in accounts")
                a.site-link.px-2.py-1.bg-secondary.uppercase.tracking-wide.font-normal.text-sm.text-black(:href="site.url") {{ site.name }}


    .mt-8
        .sectionhead.inline-block.bg-primary.text-white.leading-tight.antialiased.text-left.font-bold.p-2.text-2xl.font-serif
        | other websites

        ul.inline-list.list-none.m-0.p-0
        li.inline-block.leading-none.pl-5(v-for="site in websites" :key="site.url")
            a.site-link.px-2.py-1.bg-secondary.uppercase.tracking-wide.font-normal.text-sm.text-black(:href="site.url") {{ site.name }}

    .mt-8
        .sectionhead.inline-block.bg-primary.text-white.leading-tight.antialiased.text-left.font-bold.p-2.text-2xl.font-serif
        | other web-projects

        ul.inline-list.list-none.m-0.p-0
        li.inline-block.leading-none.pl-5(v-for="project in projects" :key="project.url")
            a.site-link.px-2.py-1.bg-secondary.uppercase.tracking-wide.font-normal.text-sm.text-black(:href="project.url") {{ project.name }}

    .mt-8
        //- BlogPosts
</template>

<script setup lang="ts">
const accounts = [
    { url: "https://github.com/michaelpaulukonis", name: "github" },
    { url: "https://www.linkedin.com/in/michaelpaulukonis/", name: "linkedin" }
]

const websites = [
    { url: "http://michaelpaulukonis.com", name: "michaelpaulukonis.com" },
]

const projects = [
    { url: "https://michaelpaulukonis.github.io/polychrome.p5/", name: "polychrometext" },
    { url: "https://michaelpaulukonis.github.io/imagetexter.p5/", name: "imagetexter" },
    { url: "https://michaelpaulukonis.github.io/obscurus/", name: "OBSCURUS" },
    { url: "http://poeticalbot.tumblr.com/", name: "poetical bot" },
    { url: "https://leanstooneside.tumblr.com/", name: "List Mania" },
    { url: "http://michaelpaulukonis.github.io/malepropp", name: "fairy tale generator" },
    { url: "http://michaelpaulukonis.github.io/poetrygen/", name: "poetry generators" }
]
</script>