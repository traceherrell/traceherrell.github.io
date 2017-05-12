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
  
  <h3 v-for="n in selectedList"> {{n.name}} <i class="fa fa-trash" @click="remove(n)" ></i> </h3>
  </div>
</template>

<script>
import _ from 'lodash'
import InputSelect from './InputSelect'

export default {
  name: 'inputSelectList',
  data () {
    return {
      lookup: [{name: 'Trace', id: 1}, {name: 'Simone', id: 2}, {name: 'Nathan', id: 3}, {name: 'Molly', id: 4}, {name: 'John', id: 5}, {name: 'Abby', id: 6}],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
