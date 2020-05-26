<template>
    <div>
        <lamp-status v-for="lamp in 5"></lamp-status>
    </div>
</template>

<script>
import lampStatus from "./lampStatus"

export default {
    components : {
        "lamp-status" : lampStatus
    }
}
</script>













