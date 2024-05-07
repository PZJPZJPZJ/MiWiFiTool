<template>
  <div class="container">
    <div class="box">
      <input class="inputBox" type="text" v-model="hwString" @keyup.enter="getSoftware(hwString)">
      <div class="list" v-for="item in softwareList" :key="item">
        <div class="content">
          <a :href=item.url>{{item.title}}{{ item.version }}</a>
        </div>
      </div>
      <input class="inputBox" type="text" v-model="snString" @keyup.enter="calculate(snString)">
      <div class="list">
        <div class="content">
          <p>根密码:{{ resultPassword }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {calculate,resultPassword} from "@/api/GetPassword"
import {getSoftware,softwareList} from "@/api/GetFirmware";
let hwString = ref('RC06STA')
let snString = ref('123/123')
onMounted(() => {

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

.inputBox{
  width: 100%;
  padding: 15px;
  background: rgba(255,255,255,0.5);
  border-radius: 10px;
  outline: none;
  box-shadow: none;
  border: none;
  font-size: 1em;
  letter-spacing: 0.1em;
  transition: 0.5s;
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
