<template>
    <footer class="footer">
        <p>隐私声明 服务协议 Copyright © 2012-2018 xxx软件技术有限公司 版权所有 保留一切权利</p>
        <p>公安备案 苏公网安备000000000000000号 | 苏ICP备0000000号-0 | 增值电信业务经营许可证：苏00-0000000号</p>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'SameFooter'
})
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 120px;
        background-color: #eee;
        color: #ccc;
        font-size: 12px;
        >p {
            padding: 10px 0;
        }
    }
</style>


