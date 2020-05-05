<template>
<div>
    <p>Lamba Durumu : {{status}} </p>
    <button @click="openLamb" >Lambayi Ac/Kapat</button>
    <hr>
</div>
    
</template>

<script>
export default {
    data : function(){
        return{
            status : "Kapali"
        }
    },
    methods :{
        openLamb() {
            this.status = "Acik"
        } 
    }
}
</script>