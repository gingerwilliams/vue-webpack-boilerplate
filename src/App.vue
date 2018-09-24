<template>
  <div>
    <h1>Hello Vue!</h1>
    <p>This is your first Vue Component</p>
    <blockquote>
        <welcome-component name="Ginger" />
    </blockquote>
  </div>
</template>

<script>
    import WelcomeComponent from './components/WelcomeComponent.vue'

    export default {
        components: {
            WelcomeComponent
        }
    }

</script>