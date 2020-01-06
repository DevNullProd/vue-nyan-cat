<template>
  <div id="nyan-cat">
    <img src="https://raw.githubusercontent.com/DevNullProd/vue-nyan-cat/master/src/assets/nyan-cat.gif" />
  </div>
</template>

<script>
// FIXME: how to reference image in project in such a way that
//        when it is built & imported, ref is not broken

export default {
  name: 'NyanCat'
}
</script>

<style scoped>
#nyan-cat{
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
