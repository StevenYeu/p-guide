<template>
  <div class="guide">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <h2 class="subtitle">{{ subtitle }}</h2>
        </div>
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-two-thirds">
        <b-table :data="characters" :columns="columns" :mobile-cards="hasMobileCards"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'guide',
  components: {},
  data: function() {
    return {
      columns: [
        {
          field: 'arcana',
          label: 'Arcana'
        },
        {
          field: 'name',
          label: 'Name'
        }
      ],
      hasMobileCards: true
    }
  },
  props: {
    characters: {
      type: Array
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped></style>
