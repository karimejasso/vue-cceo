<script setup>
//defineProps(["title","id","colorText"]);
defineProps({
    title: String,
    id: Number,
    Body:{
        type: String,
        default:"sin description",
    },
    cambiarfav: Function,
});
const emit = defineEmits(['cambiarfavn'])
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title"
            :class="`text-${colorText}`">
            {{id}} - {{ title }} </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis atque asperiores, molestias assumenda consectetur! Voluptatibus vel, consectetur qui officiis, adipisci eveniet veniam possimus quo, est fuga libero quaerat iusto.</p>
            <button 
                @click="$emit('cambiarfav', title)"
                class="btn btn-outline-primary">
                
            </button>
        </div>
    </div>
</template>