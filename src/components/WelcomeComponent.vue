<template>
    <h3>Welcome {{name}}</h3>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>