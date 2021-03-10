<template>
  <div class="home">
    <h2>Home</h2>
    <div v-for="(data,index) in list" :key="index">
      <p>{{data.name}}</p>
      <button @click="transition()">還移</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      list:[
        { id:1, name:"first"},
        { id:2, name:"second"},
        { id:3, name:"third"}
      ]
    };
  },
  methods: {
    transition(dataId){
      this.$router.push({ name:"Detail",params: {id:dataId} });
    } 
  },
};
</script>



