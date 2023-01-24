<script>
import Service from "../service";
export default {
  props: ["name", "glassImg"],
  mounted() {
    console.log()
  },
}
</script>
<template>
  <div class="collection-page-container">
    <div class="collection-page-main">
      <div class="collection-item-name">
       <span>{{name}}</span>
      </div>
      <img :src="glassImg">
    </div>
  </div>
</template>
<style scoped>
.collection-page-container {
  display: flex;
  height: 350px;
  width: 100%;
  background: #fff;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}
.collection-page-main {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f6f6f4;
}
.collection-item-name {
    display: flex;
    width: 100%;
    top: 5%;
    position: absolute;
    height: 9%;
    justify-content: center;
    align-items: center;
    font-family: "Acumin Pro";
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    z-index: 5;
}
img {
  width: 100%;
  height: 100%;
}
</style>