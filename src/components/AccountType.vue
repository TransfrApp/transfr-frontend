<template>
<div class="window">
      <h1 class="center">{{ msg }}</h1>
     <el-col class="radio-container" :span="24">
        <el-row class="top" type="flex" justify="center">
          <el-radio-group v-model="type">
            <el-radio 
                text-color='#6532bd'
                fill='#6532bd'
                label="market" 
                border>Market</el-radio>
            <el-radio 
                text-color='#6532bd'
                fill='#6532bd'
                label="consumer"
                border>Consumer</el-radio>
            </el-radio-group>
        </el-row>
     </el-col>
     <el-col>
       <el-row type="flex"  align="bottom" justify="center">
       <router-link :to="{path: '/home'}">
          <Button v-on:click="login" text="Log In"/>
       </router-link>
       </el-row>
     </el-col>
   </div>
</template>
<script>
import Button from './Button.vue';

export default {
    data() {
        return {
            msg: 'Select Account Type',
            type: '',
        }
    },
    components: {
        Button,
    }
}
</script>
<style scoped>
.window {
  background-color: #ffffff;
  margin-top: 15vh;
  margin-left: 20vw;
  width: 60vw;
  height: 60vh;
  border-radius: 37px;
}
.hotlink {
  text-decoration: none;
  color: #6532bd;
  padding-left: 5px;
}
.top {
  padding-bottom: 15vh;
}
.route-link {
  text-decoration: none;
}
.radio-container {
    margin-top: 12vh;
}

</style>

