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
          @click="navigateTo(item.path)"
        ></v-list-item>
        <!-- 
          <v-list-item prepend-icon="mdi-home-outline" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account-outline" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-gamepad-variant-outline" title="Hobby" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-file-code-outline" title="Project" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-card-account-mail-outline" title="Contact" value="about"></v-list-item> 
        -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      <!-- 
      <v-container>
        <HomePage />
      </v-container> 
      -->
    </v-main>


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
// import ProfileCard from '../components/ProfileCard.vue';
// import WorkhistorySkils from '../components/WorkhistorySkils.vue';
// import PersonalProject from '../components/PersonalProject.vue';
// import HobbyAnime from '../components/HobbyAnime.vue';
import HomePage from '../components/HomePage.vue';
// import InformationHistoryView from '../views/InformationHistoryView.vue'


export default defineComponent({
  name: 'HomeView',

  components: {
    // HelloWorld,
    // ProfileCard,
    // WorkhistorySkils,
    // PersonalProject,
    // HobbyAnime,
    HomePage,
    // InformationHistoryView,
  },
  method: {
    navigateTo(path) {
      this.$router.push(path)
    }

  },

  data: () => ({
    drawer: null,
    sidelists: [
      {titleJP: "ホーム", titleENG: "Home", path: "/", icon:"mdi-home-outline"},
      {titleJP: "プロフィール", titleENG: "Profile", path: "/profile", icon:"mdi-account-outline"},
    ]
  })


});
</script>
