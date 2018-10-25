<template>
  <div>
    <header></header>

    <div class="top-wapper">
      <div class="container">
        <h1>呼びたい人</h1>

        <div class="selectbox">
          <ul class="items">
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="家族" v-model="attendant"/>
              <span class="cp_sl08_label cp_sl08_placeholder">家族</span>
            </li>
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="家族・友人" v-model="attendant"/>
              <span class="cp_sl08_label cp_sl08_placeholder">家族・友人</span>
            </li>
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="家族・親戚周り" v-model="attendant"/>
              <span class="cp_sl08_label cp_sl08_placeholder">家族・親戚周り</span>
            </li>
            <li class="item">
              <input class="" type="radio" name="awesomeness" value="家族・友人・親戚周り" v-model="attendant"/>
              <span class="cp_sl08_label cp_sl08_placeholder">家族・友人・親戚周り</span>
            </li>
            <li class="item">
              <input class="" type="radio" name="awesomeness" />
              <span class="cp_sl08_label cp_sl08_placeholder"></span>
              <input class="textitem" type="text" placeholder="その他">
            </li>
          </ul>
        </div>

        <div class="buttons">
          <input v-on:click="prevButtonAction" type="button" class="btn-left" value="戻る" />
          <input v-on:click="nextButtonAction" type="button" class="btn-right" value="進む" />
        </div>

      </div>
    </div>

    <footer>
      <div class="price">
        <h2>¥ {{ getPrice }} </h2>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FormAttendant',
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
    attendant: {
      get () {
        return this.$store.state.property.attendant
      },
      set (value) {
        this.$store.commit('setProperty', {attendant: value})
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

  footer{
    margin-top: 250px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
  }

  footer h2{
    font-size: 36px;
    text-align: left;
    padding-left: 20px;
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
</style>
