<template>
    <div>
        
       <h3>Yeni An </h3>
       <button class="btn btn-primary btn-sm" @click="counter++">Arttir</button>
       <p> {{counter}} </p>

    </div>
  
</template>
<script>
export default {
    data : function(){
        return {
            counter : 0
        }
    },
    destroyed() {
        console.log('destroyed')
    },
    activated() {
        console.log("activated")
    },
    deactivated() {
        console.log("deactivated")
        
    },
}
</script>


<style scoped>
div{
border : 1px solid #ccc;
box-shadow: 1px 1px 2px #666;
padding: 20px 20px;
margin-top: 10px;
border-radius: 15px ;
}


</style>

