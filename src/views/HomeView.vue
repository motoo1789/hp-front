<template>
  <HobbyAnime />
  <PersonalProject />
  <ProfileCard />
  <WorkhistorySkils />
  <HelloWorld />
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import ProfileCard from '../components/ProfileCard.vue';
import WorkhistorySkils from '../components/WorkhistorySkils.vue';
import PersonalProject from '../components/PersonalProject.vue';
import HobbyAnime from '../components/HobbyAnime.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    ProfileCard,
    WorkhistorySkils,
    PersonalProject,
    HobbyAnime,
  },
});
</script>
