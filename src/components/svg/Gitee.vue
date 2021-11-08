<template>
  <a class="fix-gitee" src="https://gitee.com" target="_blank">
    <img src="@/assets/svg/gitee.svg" alt="gitee" />
  </a>
</template>

<style lang="scss" scoped>
.fix-gitee {
  position: absolute;
  top: 60px;
  right: 0;
  width: 48px;
  height: 48px;
  background-color: rgb(34, 34, 34);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  img {
    display: block;
    width: 30px;
    height: 30px;
  }
}
</style>
