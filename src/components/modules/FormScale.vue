<template>
  <div>
    <header></header>

    <div class="top-wapper">
      <div class="container">
        <h1>どんなふうに？</h1>

        <div class="selectbox">
          <ul class="items">
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="盛大に" v-model="scale"/>
              <span class="cp_sl08_label cp_sl08_scaleholder">盛大に</span>
            </li>
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="一般的" v-model="scale"/>
              <span class="cp_sl08_label cp_sl08_scaleholder">一般的</span>
            </li>
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="小ぢんまりとした" v-model="scale"/>
              <span class="cp_sl08_label cp_sl08_scaleholder">小ぢんまりとした</span>
            </li>
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="その他" v-model="scale"/>
              <span class="cp_sl08_label cp_sl08_scaleholder"></span>
              <input class="textitem" type="text" placeholder="その他" v-bind:disabled="scale!='その他'">
            </li>
          </ul>
        </div>

        <div class="buttons">
          <input v-if="this.$store.state.stepCount!=0" v-on:click="prevButtonAction" type="button" class="btn-left" value="戻る" />
          <input v-on:click="nextButtonAction" type="button" class="btn-right" value="進む" v-bind:disabled="scale==''"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FormScale',
  methods: {
    ...mapActions('Form', {
      'nextButtonAction': 'nextButtonAction',
      'prevButtonAction': 'prevButtonAction'
    })
  },
  computed: {
    ...mapGetters({
      'getPrice': 'getPrice'
    }),
    scale: {
      get () {
        return this.$store.state.property.scale
      },
      set (value) {
        this.$store.commit('setProperty', {scale: value})
      }
    }
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

  /*幅の指定*/
  .top-wapper {
    width: 80%;
    text-align: center;
    padding-top: 20px;
    margin: 0 auto;
  }

  /*呼びたい人，および下のmargin*/
  .top-wapper h1{
    font-size: 36px;
    margin-bottom: 100px;
  }

  .selectbox li{
    list-style: none;
    padding: 10px;
  }

  .selectbox ul{
    list-style: none;
    padding: 0;
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
    margin: 20px 0;
  }

  .buttons .btn-left{
    font: 1rem 'Fira Sans', sans-serif;
    padding: .5rem;
    background: #86d1f0;
    border: none;
    border-radius: 4px;
    margin: 4px;
    float: left;
    padding: 5px 15px;
  }

  .buttons .btn-right{
    font: 1rem 'Fira Sans', sans-serif;
    padding: .5rem;
    background: #86d1f0;
    border: none;
    border-radius: 4px;
    margin: 4px;
    float: right;
    padding: 5px 15px;
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
</style>
