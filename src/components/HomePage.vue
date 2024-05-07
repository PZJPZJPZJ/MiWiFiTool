<template>
  <div class="container">
    <div class="box">
      <div class="list" v-for="item in softwareList" :key="item">
        <div class="content">
          <h4>{{ item }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {calculate} from "@/api/GetPassword"
import {getSoftware} from "@/api/GetFirmware";

let softwareList = ref()

onMounted(() => {
  console.log(calculate("123/123"))
  getSoftware('RC06STA').then(data => {
    softwareList = data
    console.log(softwareList)
  })
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F7F7F7;
}

.box {
  position: relative;
  min-width: 350px;
  width: 50vw;
}

.list {
  position: relative;
  display: flex;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.box:hover .list {
  filter: blur(5px);
}

.box .list:hover {
  transform: scale(1.1);
  filter: blur(0px);
}

.imgBox {
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
}

.imgItem {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
