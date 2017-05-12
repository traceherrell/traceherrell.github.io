<template>
  <div style="position:relative;">
    <input class="form-control" ref="input" 
      v-bind:value="value" 
      v-bind:placeholder="placeholder" 
      v-on:input=updateValue($event.target.value) 
      v-on:keydown.down="down" 
      v-on:keydown.up="up" 
      v-on:keydown.enter="hit" />
    <div v-show="show" style="height: auto;  
                              width: 100%;  
                              z-index: 10; 
                              top: 40px;  
                              background-color: #ffffff; 
                              position: absolute; 
                              overflow: hidden; 
                              border-bottom-left-radius: 3px; 
                              border-bottom-right-radius: 3px; 
                              border-bottom: solid 1px #EEEEEE; 
                              border-left: solid 1px #EEEEEE; 
                              border-right: solid 1px #EEEEEE; ">
      <ul>
    <li style="list-style: none; 
              margin-left: -35px; 
              cursor: pointer; 
              margin-right: 5px; 
              padding-left: 5px;" 
        v-html="item" v-for="(item,index) in marked  " 
        v-bind:class="activeClass(index)" 
        v-on:mousedown="hit" 
        v-on:mousemove="setActive(index)">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'inputselect',
  props: ['value', 'list', 'placeholder', 'textfield', 'resetOnSelected'],
  data () {
    return {
      current: 0,
      isSelected: false
    }
  },
  computed: {
    filtered: function () {
      var arr = _.filter(this.list, function (data) {
        return _.includes(_.toUpper(data[this.textfield]), _.toUpper(this.value))
      }.bind(this))
      return _.take(_.orderBy(arr, this.textfield), 15)
    },
    marked: function () {
      var re = new RegExp(this.value, 'gi')
      return _.map(this.filtered,
        function (data) {
          return data[this.textfield].replace(re, '<strong style="font-size: 1.1em">' + this.value + '</strong>')
        }.bind(this))
    },

    show: function () {
      if (!!this.value) {
        return true
      }
      return false
    }
  },
  methods: {
    updateValue: function (value) {
      var formattedValue = value

      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      this.$emit('input', formattedValue)
    },

    setActive: function (index) {
      this.current = index
    },

    activeClass: function (index) {
      return {
        active: this.current === index
      }
    },

    hit: function () {
      if (this.filtered[this.current] && this.show) {
        this.onHit(this.filtered[this.current])
      }
    },

    up: function () {
      if (this.current > 0) {
        this.current--
      } else if (this.current === -1) {
        this.current = this.filtered.length - 1
      } else {
        this.current = -1
      }
    },

    down: function () {
      if (this.current < this.filtered.length - 1) {
        this.current++
      } else {
        this.current = -1
      }
    },
    onHit: function (data) {
      this.$emit('input', data[this.textfield])
      this.$emit('selected', data)
      if (this.resetOnSelected) {
        this.reset()
      }
    },

    reset: function () {
      this.current = 0
      this.$emit('input', '')
    }
  }
}
</script>
