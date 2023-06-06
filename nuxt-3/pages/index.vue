<script setup lang="ts">
const articles = ref<{id: number, title: string}[]>([])
articles.value = [{id: 1, title: "Nuxt3入門"}, {id: 2, title: "Jest入門"}]
</script>

<template>
  <div>
    <p>新着記事</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{path: '/details', query: { id: article.id }}">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
