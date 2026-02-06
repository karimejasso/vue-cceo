<script setup>
import {ref, computed} from 'vue'
const name = "vue dinamico" ;
const styleColor = "color:blue";
const arrayColores = ["ble","red","morado"];
const activo = false;
const arrayFrutas =["manzana","pera","uva"];

//metodo
const handleClick = (message) => {
  console.log(message);
}
let counter = ref(0);
const increment = () => {
  console.log('aumentar contador');
  counter.value ++;
};
const decrement = () => {
  console.log('descontar contador');
  counter.value --;
};
const reset = () => (counter.value = 0);

const classCounter = computed(() => {
  if (counter.value === 0){
    return 'zero'
  }
  if (counter.value > 0){
    return 'positive'
  }
    if (counter.value < 0){
    return 'negative'
  }

})
</script>
<template>
  <button @click="increment">aumentar</button>
  <button @click="decrement">decrement</button>
  <button @click="reset">reset</button>
  <h2 :class="counter > 0 ? 'positive' : 'negative' ">{{ counter }}</h2>
  <button v-on:click.right.prevent="handleClick('texto right')">activame right</button>
  <button @click="handleClick('texto left')">activame left</button>
  <button @click.middle="handleClick('texto middle')">activame middle</button>
  <h1>holaaaaaaaaa {{ name.toUpperCase() }}</h1>
  <h2 :style="styleColor">soy azul</h2>
  <h3>
    {{ activo ? "estoy activo" : "estoy inactivo" }}
  </h3>
  <h2 v-if = "activo"> estoy activo</h2>
  <p v-else>estoy inactivo</p>
  <ul>
    <li v-for = "(fruta, index) in arrayFrutas" :key="index">
      {{ index }} - {{ fruta }}
    </li>
  </ul>
  
</template>

<style>
h1 {
    color: aqua;
}
.positive{
  color: green;
}
.negative{
  color: brown;
}
.zero{
  color: rgb(236, 121, 5);
}
</style>
