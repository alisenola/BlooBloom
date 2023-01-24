<script>
export default {
  methods: {
    
  }
}
</script>

<template>
  <div class="header">
    <div class="side-menu">
      <div class="menu-btn">
        <a class="menu-title" ><span>MENU</span></a>
      </div>

      <div class="bloobloom-side-menu" id="bloobloom-side-menu">
        <div class="sidemenu-main">
          <div class="sidemenu-main-tab" id="spectacles">
            <span class="sidemenu-tab-title">SPECTACLES</span>
            <svg width="11" height="16" viewBox="0 0 11 16" fill="none" class="sidemenu-tab-icon">
              <path d="M1 1L9 8.2L1 15.4" stroke="black" stroke-opacity="0.85" stroke-width="1.5"></path>
            </svg>
            <div class="bloobloom-side-menu" id="spectacles-menu">
              <div class="sidemenu-main">
                <router-link :to="{name:'collection', params:{url:'spectacles-women'}}" class="sidemenu-main-tab">
                  <span class="sidemenu-tab-title">WOMEN</span>
                </router-link>
                <router-link :to="{name:'collection', params:{url:'spectacles-men'}}" class="sidemenu-main-tab">
                  <span class="sidemenu-tab-title">MEN</span>
                </router-link>
              </div>
            </div>
          </div> 
          <div class="sidemenu-main-tab" id="sunglasses">
            <span class="sidemenu-tab-title">SUNGLASSES</span> 
            <svg width="11" height="16" viewBox="0 0 11 16" fill="none" class="sidemenu-tab-icon">
              <path d="M1 1L9 8.2L1 15.4" stroke="black" stroke-opacity="0.85" stroke-width="1.5"></path>
            </svg>
            <div class="bloobloom-side-menu" id="sunglasses-menu">
              <div class="sidemenu-main">
                <router-link :to="{name:'collection', params:{url:'sunglasses-women'}}" class="sidemenu-main-tab">
                  <span class="sidemenu-tab-title">WOMEN</span>
                </router-link>
                <router-link :to="{name:'collection', params:{url:'sunglasses-men'}}" class="sidemenu-main-tab">
                  <span class="sidemenu-tab-title">MEN</span>
                </router-link>
              </div>
            </div>
          </div> 
          <a href="/pages/home-try-on" class="sidemenu-main-tab">
            <span class="sidemenu-tab-title">Home Try On</span>
          </a> 
          <a href="/stores" class="sidemenu-main-tab">
            <span class="sidemenu-tab-title">Free Eye Test</span>
          </a> 
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10010;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
}
.bloobloom-side-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -30vh;
  width: 30vh;
  background-color: #fff;
  border-right: 1px solid #000;
  height: 92vh;
  transition: all .4s ease;
  z-index: 10020;
}
.sidemenu-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.sidemenu-main-tab {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #000;
    cursor: pointer;
    text-decoration: none;
}
.sidemenu-tab-title {
    font-family: "Acumin Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;
    margin-left: 18px;
}
.sidemenu-tab-icon {
    margin-right: 18px;
}
#spectacles-menu {
  top:0;
  z-index:-1
}
#sunglasses-menu {
  top:-50px;
  z-index:-1
}
.side-menu:hover #bloobloom-side-menu{
  left: 0;
}

#spectacles:hover #spectacles-menu{
  left: 30vh;
}
#sunglasses:hover #sunglasses-menu{
  left: 30vh;
}
h4 {
  height: 7vh;
  border-bottom: 1px solid #000;
}
.menu-btn {
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:20px;
  cursor: pointer;
  box-sizing: border-box;
}

.menu-btn:hover {
  text-decoration: underline solid 2px;
}
</style>
