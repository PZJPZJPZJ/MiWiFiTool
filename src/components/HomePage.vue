<template>
  <div class="container">
    <div class="box">
      <h3>根密码计算器</h3>
      <div class="top-box">
        <input class="inputBox" type="text" placeholder="输入路由器SN" v-model="snString"
               @input="pwdString=calculate(snString)">
        <input class="inputBox" type="text" placeholder="根密码" v-model="pwdString" readonly>
      </div>
      <h3>固件查询器</h3>
      <div class="bottom-box">
        <input class="inputBox" type="text" placeholder="输入路由器型号（如RC06STA）" v-model="hwString"
               @change="getSoftware(hwString)">
        <div class="list" v-for="item in softwareList" :key="item">
          <div class="content">
            <a :href=item.url>{{ item.type }}{{ item.version }}</a>
            <div class="log-title" v-html="item.title"></div>
            <div class="log-content" v-html="item.contents"></div>
            <div class="log-time" v-html="new Date(item.time)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {calculate} from "@/assets/js/GetPassword"
import {getSoftware, getHardware, softwareList} from "@/assets/js/GetFirmware";

let snString = ref('')
let pwdString = ref('')
let hwString = ref('')

onMounted(() => {
})
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F7F7F7;
}

.box {
  width: 60vw;
  min-width: 350px;
}

.top-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.bottom-box {
  display: grid;
  grid-template-columns: 1fr;
}

.list {
  position: relative;
  display: flex;
  padding: 15px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
}

.content {
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.inputBox {
  margin: 10px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  outline: none;
  box-shadow: none;
  border: none;
  font-size: 1em;
  letter-spacing: 0.1em;
  transition: 0.5s;
}

.log-title {
  font-size: 18px;
}

.log-content {
  font-size: 12px;
}

.log-time {
  font-size: 10px;
}
</style>
