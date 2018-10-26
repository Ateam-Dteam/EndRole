<template>
    <div>
      <header>
        <div class="container">
          <div class="header-left">
            <img class="logo" src="@/assets/logo.png">
          </div>
          <span class="fa fa-bars menu-icon"></span>
        </div>
      </header>

      <div class="top-wrapper">
        <div class="container">
          <img src="@/assets/endrole_top-2.png" alt="">
          <router-link class="btn" to="/Form"></router-link>
        </div>
      </div>

      <footer></footer>
    </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
  /* タブレット向けレイアウト */
  @media (max-width: 1000px) {
    .lesson {
      width: 50%;
      margin-bottom: 50px;
    }
  }

  /* スマホ向けレイアウト */
  @media (max-width: 670px) {

    .menu-icon{
      display: block;
    }

  }

  * {
    position: relative;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-color: inherit;
  }

  .container img{
    width: 97%;
    margin: 0 auto;
  }

  .container{
    text-align: center;
  }

  header .logo{
    width:30%;
    float: right;
    padding-right: 5px;
    padding-top: 5px;
  }

  .menu-icon {
    /*  color: white;*/
    float: left;
    /*  text-align: right;*/
    font-size: 100px;
    padding: 10px 10px;
    /* displayをnoneに指定してください */
    display: none;
  }

  .logo {
    width: 124px;
    margin-top: 20px;
  }

  .btn{
    position: absolute;
    height: 60px;
    width: 170px;
    right: 30%;
    top: 91%;

    padding:0;
    margin:0;
    background:none;
    border:0;
    font-size:0;
    line-height:0;
    overflow:visible;
    cursor:pointer;
  }

  input {
  outline: 0;
  }
</style>
