<template>
  <div class="home">
    <div class="columns">
      <div v-for="game in data" v-bind:key="game.id" class="column">
        <Game :title="game.title" :img="game.img" :guide="game.guide" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'
import { games } from '../constants/Data.js'
export default {
  name: 'home',
  components: {
    Game
  },
  data: function() {
    return {
      data: games
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 2em;
  padding-left: 2em;
  padding-right: 2em;
}
</style>
