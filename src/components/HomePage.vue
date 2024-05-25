<template>
  <div class="container">
    <div class="box">
      <h3>密码计算器</h3>
      <div class="top-box">
        <input class="inputBox" type="text" placeholder="输入路由器SN（如12345/A1B2C3D4E）" v-model="snString"
               @input="pwdString=calculate(snString)">
        <input class="inputBox" type="text" placeholder="根密码" v-model="pwdString" readonly>
      </div>
      <h3>固件下载器</h3>
      <div class="bottom-box">
        <input class="inputBox" type="text" placeholder="输入路由器Model（如RC06STA）" v-model="hwString"
               @change="getSoftware(hwString)">
        <div class="list" v-for="item in softwareList" :key="item">
          <div class="content" @click="redirectPage(item.url)">
            <div class="log-version" v-html="item.type + item.version"></div>
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
import {redirectPage} from "@/assets/js/PageNavigator";
import {calculate} from "@/assets/js/GetPassword"
import {getSoftware, softwareList} from "@/assets/js/GetFirmware";

import "@/assets/css/HomePage.css"

let snString = ref('')
let pwdString = ref('')
let hwString = ref('')

onMounted(() => {

})
</script>

<style scoped>

</style>
