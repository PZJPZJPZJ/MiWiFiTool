<template>
  <div class="container">
    <div class="box">
      <input class="inputBox" type="text" placeholder="输入路由器型号（如RC06STA）" v-model="hwString"
             @keyup.enter="getSoftware(hwString)">
      <div class="list" v-for="item in softwareList" :key="item">
        <div class="content">
          <h2 class="rank">下载</h2>
          <a :href=item.url>{{ item.title }}{{ item.version }}</a>
        </div>
      </div>
      <input class="inputBox" type="text" placeholder="输入路由器SN" v-model="snString"
             @keyup.enter="pwdString=calculate(snString)">
      <div class="list">
        <div class="content">
          <p>根密码:{{ pwdString }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {calculate} from "@/api/GetPassword"
import {getSoftware, softwareList} from "@/api/GetFirmware";

let hwString = ref('')
let snString = ref('')
let pwdString = ref('')
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
  filter: blur(0px);
}

.box .list:hover {
  transform: scale(1);
  filter: blur(0px);
}

.inputBox {
  width: 100%;
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

.box .list .content .rank {
  position: absolute;
  right: 20px;
  color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  filter: blur(10px);
  transition: 0.3s;
}

.box .list .content .rank small {
  font-weight: 500;
  opacity: 0.25;
}

.box .list:hover .content .rank {
  opacity: 1;
  filter: blur(0px);
}

.box .list .content h4 {
  line-height: 1.2em;
  font-weight: 600;
}

.box .list .content p {
  font-size: 0.75em;
}
</style>
