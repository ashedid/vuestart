<template>
  <h3>
    template grammar
  </h3>
  <p :id="sid" :class="sclass" :title="stitle">{{ msg }}</p>
  <p v-bind="objectOfAttrs">{{ num + 1 }}</p>
  <p>{{ ok ? num + 1 : 0 }}</p>
  <p>{{ msg.split('').reverse().join('') }}</p>
  <p v-html="rawHTML"></p>
  <button :disabled="sdisabled" @click="buttoncount++">{{ buttoncount }}</button>
  <!--内联事件处理器-->
  <button :disabled="sdisabled" @dblclick="add('mess',$event)">{{ buttoncount }}</button>
  <!--  方法事件处理器-->


  <p v-if="flag==='a'">see me</p>
  <p v-else-if="flag==='b'">see me?</p>
  <p v-else-if="flag==='c'">see me??</p>
  <p v-else>ok</p>
  <p v-show="flag==='e'">osk</p>

  <button @click="addListItem">add data</button>
  <ul>

    <!--    <li v-for="(item,index) in array" :key="item.id" @click="add('mess',$event)">{{ item.name }} :-->
    <!--      {{ item.score }}&#45;&#45;{{ index }}-->
    <!--    </li>-->
    <li v-for="(item,index) in array2" key="index">
      {{ item }}
    </li>

  </ul>

  <p v-for="(item,key,index) of userInfo">{{ item }}--{{ index }}--{{ key }}</p>
  <div @click="clickDiv">

    <a @click.prevent.stop="clickHandler" href="https://discord.com">dcard</a><!-- 时间修饰符-->
  </div>

  <h3>{{ dixiashi.name }}</h3>
  <p>{{ dxsContant }}</p>

</template>

<script>
export default {
  name: "First",
  data() {
    return {
      buttoncount: 0,
      msg: '24',
      num: 23,
      ok: true,
      rawHTML: "<p>something</p>",
      sid: 'usa',
      sclass: "someclass",
      stitle: null || undefined || 'cla',
      sdisabled: false,
      objectOfAttrs: {
        sid: 'usa',
        sclass: "someclass"
      },
      flag: 'e',
      array: [{
        id: 0,
        name: 'sck',
        score: 100
      }, {id: 1, name: 'zb', score: 99}
      ],
      array2: [
        'a', 'b', 'c'
      ],
      userInfo: {
        id: 1,
        name: 'sc',
        score: 99
      },

      dixiashi: {
        name: "sck",
        contant: ["klmzfxd", "dxssj", "zyf"]
      }


    }

  },
  methods: {
    add(msg, e) {
      this.buttoncount++
      console.log(e.target.innerHTML)
      console.log(msg)

    },
    clickHandler(e) {
      // e.preventDefault();//preventDefault

      console.log('<a> click done')
      // e.stopPropagation() // 阻止繁殖
    },
    clickDiv() {
      console.log('div')
    },

    addListItem() { //数组变化侦测
      //this.array2.push('d') //auto UI update | one of 变更方法
      this.array2 = this.array2.concat(['d']) //no auto UI update | one of 替换方法 {filter, slice..}
      this.array2 = this.array2.concat(this.array)
      console.log(this.array2)
    }
  },

  computed: { //计算属性
    dxsContant() {
      return this.dixiashi.contant.length > 0 ? 'yes' : 'no'
    }
  }
}
</script>


<style>
.someclass {
  color: aqua;
  font-size: 30px;
}
</style>