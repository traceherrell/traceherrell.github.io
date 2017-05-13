<template>
  <div>
   <input-select
    v-model="selectedName"
    :list="lookup"
    :textfield="'name'"
    :placeholder="'Start typing to slelect a name'"
    :resetOnSelected = "true"
    v-on:selected="onSelected"
   ></input-select>
   
    <transition-group name="list" tag="ul">
      <li v-for="n in selectedList" v-bind:key="n">
       <h4> {{n.name}} <i class="fa fa-trash" @click="remove(n)" ></i>    </h4>
      </li>
    </transition-group>
  
  </div>
</template>

<script>
import _ from 'lodash'
import InputSelect from './InputSelect'

export default {
  name: 'inputSelectList',
  data () {
    return {
      lookup: [{name: 'Trace', id: 1},
       {name: 'Simone', id: 2},
       {name: 'Nathan', id: 3},
       {name: 'Molly', id: 4},
       {name: 'John', id: 5},
       {name: 'Abby', id: 6}
      ],
      selectedName: '',
      selectedList: []
    }
  },
  methods: {
    onSelected (data) {
      this.selectedList.push(data)
      this.lookup = _.filter(this.lookup, (item) => {
        return data.id !== item.id
      })
    },
    remove (data) {
      this.lookup.push(data)
      this.selectedList = _.filter(this.selectedList, (item) => {
        return data.id !== item.id
      })
    }
  },
  components: {InputSelect}
}
</script>

<style scoped>
li {
  list-style: none;
  margin-left: -30px;
  
}
i { cursor: pointer}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
