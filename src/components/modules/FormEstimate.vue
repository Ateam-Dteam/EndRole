<template>
  <div>
    <header></header>

    <div class="top-wapper">
      <div class="container radius">
        <H1>アンケート結果</H1>
        <h2>人</h2>
        <p> {{ this.$store.state.property.attendant }} </p>

        <h2>場所</h2>
        <p> {{ this.$store.state.property.place }} </p>

        <h2>規模</h2>
        <p> {{ this.$store.state.property.scale }} </p>

        <h2>オプション</h2>
        <ul>
          <li v-for="item in this.$store.state.property.option" v-bind:key="item">
            {{ item }}
          </li>
        </ul>

        <h2>その他</h2>
        <p> {{ this.$store.state.property.other }} </p>

        <h3>この内容で相談しますか？</h3>

        <div class="buttons">
          <input v-on:click="call" type="button" class="btn-left" value="Yes" />
          <input v-on:click="prevButtonAction" type="button" class="btn-right" value="No" />
        </div>

        <div class="right">
          <img src="@/assets/logo.png" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FormEstimate',
  methods: {
    ...mapActions('Form', {
      'nextButtonAction': 'nextButtonAction',
      'prevButtonAction': 'prevButtonAction'
    }),
    call: function () {
      alert('1234-56-7890')
    }
  },
  computed: {
    ...mapGetters({
      'getPrice': 'getPrice'
    })
  }
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

  }

  * {
    position: relative;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-color: inherit;
  }

  .container{
    padding: 20px;
  }

  /*幅の指定*/
  .top-wapper {
    width: 90%;
    text-align: center;
    padding-top: 20px;
    margin: 0 auto;
  }

  .top-wapper p{
    padding: 0 10px;
    text-align: left;
    margin-bottom: 30px;

  }

  /*呼びたい人，および下のmargin*/
  .top-wapper h1{
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
    padding-left: 10px;
  }

  .top-wapper h2{
    text-align: left;
    padding-left: 10px;
  }

  .selectbox li{
    list-style: none;
    padding: 10px;
  }

  .selectbox ul{
    list-style: none;
    padding: 0;
  }

  li{
    text-align: left;
    margin-bottom: 10px;
    padding: 0 10px;
  }

  ul{
    list-style: none;
    margin-bottom: 30px;
  }

  .items {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    /*  padding-bottom: 100px;*/
    cursor: pointer;
    background-color: white;
    -webkit-box-shadow: 0 2px 0 white;
    box-shadow: 0 2px 0 white;
    border-radius: 2px;
  }

  .item {
    width: 100%;
    border: 1px solid #D6D5D5;
    border-radius: 2px;
    padding-top: 40px;
    text-align: left;
    /*  background-color: #fff;*/
    margin-bottom: 10px;
  }

  .buttons{
    margin: 10px 0;
  }

  .buttons .btn-left{
    font: 1rem 'Fira Sans', sans-serif;
    padding: .5rem;
    background: #83c6d2;
    border: none;
    border-radius: 4px;
    margin: 4px;
    /*    float: left;*/
    padding: 5px 15px;
  }

  .buttons .btn-right{
    font: 1rem 'Fira Sans', sans-serif;
    padding: .5rem;
    background: #83c6d2;
    border: none;
    border-radius: 4px;
    margin: 4px;
    /*    float: right;*/
    padding: 5px 15px;
  }

  .btn{
    font: 1rem 'Fira Sans', sans-serif;
    padding: .5rem;
    background: #83c6d2;
    border: none;
    border-radius: 4px;
    margin: 4px;
    padding: 5px 15px;
  }

  footer{
    margin-top: 250px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 80%;
    height: 55px;
  }

  footer h2{
    font-size: 36px;
    text-align: left;
    padding-left: 20px;
  }

  img{
    width: 30%;
    margin: 0 auto;
    padding-top: 30px;
    text-align: right;
  }

  .textitem{
    font-size: 15px;
    /*  border-bottom: 1px solid #D6D5D5;   */
    /*  border-radius: 0.5em;     */
    /*  padding: 0.5em;    */
    background-color: white;  /* 背景色 */
    /*  width: 20em;   */
    height: 30px;           /* 高さ */
    /*    font-size: 1em;   */
    line-height: 1.2;        /* 行の高さ */
  }

  input {
    outline: 0;
    border-width: 0 0 0.5px;
    border-color: #D6D5D5;
  }

  input:focus {
    border-color: #83c6d2;
  }

  .price{
    width: 80%;
    margin: 0 auto;
    background-color: white;

    border-top: 1px solid #D6D5D5;
    border-left: 1px solid #D6D5D5;
    border-right: 1px solid #D6D5D5;

    border-radius: 30px 30px 0 0 / 30px 30px 0 0;
    -webkit-border-radius: 30px 30px 0 0 / 30px 30px 0 0;
    -moz-border-radius: 30px 30px 0 0 / 30px 30px 0 0;
  }

  .radius{

    margin: 0 auto;
    background-color: white;

    border-top: 1px solid #D6D5D5;
    border-left: 1px solid #D6D5D5;
    border-right: 1px solid #D6D5D5;

    border-radius: 30px 30px 0 0 / 30px 30px 0 0;
    -webkit-border-radius: 30px 30px 0 0 / 30px 30px 0 0;
    -moz-border-radius: 30px 30px 0 0 / 30px 30px 0 0;
  }

  .center{
    margin: 10px;
    text-align: center;
  }

  .right{
    text-align: right;
    margin-bottom: 100px;
  }
</style>
