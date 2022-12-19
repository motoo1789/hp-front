<template>
  <ProfileCard />
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import ProfileCard from '../components/ProfileCard.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    ProfileCard
  },
});
</script>
