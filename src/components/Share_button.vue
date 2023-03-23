<template>
    <div class="btn">
        <img class="img" :src="this.img.url" />
    </div>
</template>
<script>
export default{
    props: {
        img: {
            type: Object
        }
    }
}
</script>
<style>
.btn {
    border-radius: 50%;
    border: 2px solid;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightblue;
}
.img {
    height: 100px;
    width: 100px;
}
</style>
