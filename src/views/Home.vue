<template>
  <div id="app"></div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("changeDataAction");
    console.log(this.$store.state.list.data);
  },
};
</script>



    

