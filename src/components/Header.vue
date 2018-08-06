<template>
    <header>
        <span class="left">
          <img src="../assets/arrow-left.png"/>
        </span>
        <span class="title">{{title}}</span>
        <span class="right">
          <!-- Need to figure out what to put here -->
          <img/>
        </span>
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
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
  width: 100vw;
  /* padding: 0 16px 0 24px; */
  background-color: transparent;
  color: #ffffff;
  justify-content: space-between;
  overflow: hidden;
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
    padding-left: 20px;
}
.right {
    padding-right: 20px;
}
.right img {
  color: #6532bd;
  width: 30px; /* This is a hacky placeholder to center the title until I find a better solution*/
}
</style>