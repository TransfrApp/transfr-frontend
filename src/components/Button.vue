<template>
    <div>
        <button class="button">{{text}}</button>
    </div>
</template>
<script>
export default {
    props:["text"],
    data() {
        return {

        }
    }
}
</script>
<style>
.button {
    background-color: #6532BD;
    height: 63px;
    width: 216px;
    color: #ffffff;
    font-size: 23px;
    border-radius: 10px;
}
</style>