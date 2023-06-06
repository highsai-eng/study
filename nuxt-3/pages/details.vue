<script setup lang="ts">
const route = useRoute()
const {id} = route.query

const articles = [{
  id: 1,
  title: "Nuxt3入門",
  content: "Nuxt3が公式リリースされました。Nuxt3ではVue3対応だけでなく、NitroやVite等様々な改善が施されています。"
}, {
  id: 2,
  title: "Jest再入門",
  content: "今回はJestのモックについて整理していきます。Jestはビルトインでマッチャーが提供され、これ単体で多くのユースケースをサポートします。"
}]

const article = ref<{id: number, title: string, content: string}>()
article.value = articles.find(article => Number(id) === article.id)
</script>

<template>
  <div>
    <article v-if="article">
      <p>タイトル：{{ article.title }}</p>
      <hr />
      <div style="width: 500px">{{ article.content }}</div>
    </article>
    <NuxtLink to="/">戻る</NuxtLink>
  </div>
</template>
