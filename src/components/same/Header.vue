<template>
    <header class="header">
        <div>
            <h3>购物商城</h3>
        </div>
        <div>
            <a>登录</a>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'SameHeader'
})
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        height: 80px;
        background-color: rgba(0, 0, 255, .5);
        box-shadow: 0 1px 5px rgba(0, 0, 0, .5);
        color: #fff;
        font-size: 16px;
        a {
            color: #fff;
        }
    }
</style>


