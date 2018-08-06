<template>
    <div>
        <button class="button"><span>{{text}}</span></button>
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
    background: linear-gradient(to right, #6532bd, #7D3BB7);
    height: 63px;
    width: 216px;
    color: #ffffff;
    font-size: 23px;
    border-radius: 10px;
}
.button span {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 23px;
}
</style>