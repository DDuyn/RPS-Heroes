<template>
  <div>     {{heroes}}
      <b-container fluid>
          <b-row>     
            <b-col v-for="hero in heroes" :key="hero.hero._id">
                <b-card 
                    :header="hero.hero.Name" 
                    border-variant="secondary" 
                    header-border-variant="secondary"
                    align="center"
                    >
                    <b-table striped :items="heroes"></b-table>
                    <b-card-text>
                        <b-list-group-item>Life: {{ hero.heroStats.Life }}</b-list-group-item>
                    </b-card-text>
                </b-card>                   
            </b-col>              
          </b-row>
      </b-container>
  </div>
</template>

<script>

export default {
  name: 'Game',
  props: {
    heroes: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
