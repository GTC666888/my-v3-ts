<template>
  <div class="syt-footer">
    <div class="syt-footer-wrapper">
      <div class="syt-footer_left">
        <p class="ipc-code">
          京ICP备13018369号
        </p>
        <p class="phone-num">
          电话挂号010-56253825
        </p>
      </div>
      <div class="syt-footer_right">
        <p class="call">
          联系我们
        </p>
        <p class="people">
          合作伙伴
        </p>
        <p class="protocol">
          用户协议
        </p>
        <p class="privacy">
          隐私协议
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
</script>
<script lang="ts">
  export default {
    name: 'SytFooter'
  }
</script>
<style scoped lang="scss">
  .syt-footer {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fafafa;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    .syt-footer-wrapper {
      width: 1200px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      
      .syt-footer_left {
        display: flex;
        justify-content: center;
        align-items: center;
        .ipc-code {
          color: #BBB;
        }
        .phone-num {
          color: #666;
          margin-left: 42px;
        }
      }
      .syt-footer_right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #666;
        width: 341px;
        &>p:hover {
          cursor: pointer;
          color: #4490F1;
        }
      }
    }
  }
  
</style>