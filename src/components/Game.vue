<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="img" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
        </div>
      </div>

      <div class="content">
        <a>{{ guide }}</a>
        <br />
        <a href="#">Classroom Questions</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    title: {
      type: String,
      default: 'Game Title'
    },
    img: String,
    guide: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title {
  text-align: center;
}
</style>
