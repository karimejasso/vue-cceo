<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";

const posts = ref([
    { title: "post 1", id: 1, body: "description 1"},
    { title: "post 2", id: 2, body: "description 2"},
    { title: "post 3", id: 3, body: "description 3"},
])
const fav = ref ('')
const cambiarfav = (title) => {
    fav.value = post
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => console.log(data));
</script>
<template>
    <div class="container">
        <h1>App</h1>
        <ButtonCounter></ButtonCounter>
        <button-counter></button-counter>
        <BlogPost title="post 1" id="1" colorText="primary"/> 
        <BlogPost
            v-for="post in posts"
            :key="post.id"
            :body="post.body"
            :title="post.title" 
            :id="post.id" 
            :colorText="secundary"
            @cambiarfavn="cambiarfav">
        </BlogPost>

    </div>
</template>
