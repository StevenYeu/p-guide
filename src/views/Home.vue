<template>
  <div class="home">
    <li v-for="games in data">
      <Game title="games.title" />
    </li>
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
  props: {
    data: games
  }
}
</script>
