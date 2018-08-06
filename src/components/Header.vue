<template>
    <header>
        <span class="left">
          <img src="../assets/arrow-left.png"/>
        </span>
        <span class="title">{{title}}</span>
        <span class="right">{{rightIcon}}</span>
    </header>
</template>

<script>
export default {
  props: {
    title: String,
    leftIcon: String,
    rightIcon: String,
  },
  name: "header",
  data() {
    return {
     
    };
  },
  methods: {
      
  }
};
</script>
<style>
header {
  margin: 0 !important;
  height: 75px;
  width: 100vw;
  padding: 0 16px 0 24px;
  background-color: transparent;
  color: #ffffff;
  display: inline-flex;
  justify-content: space-between;
  align-content: center;   
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 3%;;
}
.title {
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif
}
.left {
    padding-left: 10px;
}
.right {
    padding-right: 10px;
}
</style>