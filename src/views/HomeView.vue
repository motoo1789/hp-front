<template>
  <v-app>
    <v-app-bar color="primary">
      <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>
        Motoo.Lab
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
    >
      <v-list>
        <v-list-item v-for="sidelist in sidelists" 
          :key="sidelist.titleJP" 
          prepend-icon="subtitle.icon"
          @click="changeComponent(sidelist.titleENG)"
        >
          {{ sidelist.titleJP }}
        </v-list-item> 
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <component :is="currentComponent" />
    </v-main>
      <!-- 
      <v-container>
        <HomePage />
      </v-container> 
      -->
    <!--
    <InformationHistoryView />
    <HobbyAnime />
    <PersonalProject />
    <ProfileCard />
    <WorkhistorySkils />
    <-->
  </v-app>

</template>

<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
import Profile from '../components/ProfileCard.vue';
// import WorkhistorySkils from '../components/WorkhistorySkils.vue';
// import PersonalProject from '../components/PersonalProject.vue';
// import HobbyAnime from '../components/HobbyAnime.vue';
import Home from '../components/HomePage.vue';
// import InformationHistoryView from '../views/InformationHistoryView.vue'


export default defineComponent({
  name: 'HomeView',

  components: {
    // HelloWorld,
    Profile,
    // WorkhistorySkils,
    // PersonalProject,
    // HobbyAnime,
    Home,
    // InformationHistoryView,
  },
  methods: {
    changeComponent(component) {
      console.log("ここまで来た")
      this.currentComponent = component
    }

  },

  data: () => ({
    drawer: null,
    currentComponent: "Home",
    sidelists: [
      {titleJP: "ホーム", titleENG: "Home", path: "/",  icon:"mdi-home-outline"},
      {titleJP: "プロフィール", titleENG: "Profile", path: "/profile", icon:"mdi-account-outline"},
    ]
  }),


});
</script>
