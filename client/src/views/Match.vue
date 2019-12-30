<template>
    <div>
        <h1>Match Page</h1>
        <Game :heroes="myHeroes"></Game>
    </div>
</template>

<script>
import Game from '../components/Game'
import HeroService from '@/services/HeroService'
export default {
  name: 'Match',
  components: {
    'Game': Game
  },
  data () {
    return {
      heroes: [ 8, 9 ],
      myHeroes: []
    }
  },
  mounted () {
    this.loadHeroes()
  },
  methods: {
    async loadHeroes () {
      for (let x = 0; x < this.heroes.length; x++) {
        let response = await HeroService.GetHero(this.heroes[x])
        let hero = {
          hero: response.data.hero,
          heroStats: response.data.heroStats
        }
        this.myHeroes.push(hero)
      }
    }
  }
}
</script>

<style scoped>

</style>
