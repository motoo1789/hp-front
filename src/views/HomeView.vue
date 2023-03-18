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
          prepend-icon="sidelist.icon"
        >
          <router-link :to="sidelist.path" > {{ sidelist.titleJP }}</router-link> 
        </v-list-item> 
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <v-container>
          <router-view /> 
        </v-container>   
    </v-main>
  </v-app>

</template>
<style>
  .blue-b {
    border: 1px blue solid
  }
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',

  components: {

  },
  methods: {
    changeComponent(component) {
      console.log("ここまで来た")
      this.currentComponent = component
    }

  },

  data: () => ({
    drawer: null,
    sidelists: [
      {titleJP: "ホーム",           titleENG: "Home",     path: "/home",        icon:"mdi-home-outline"},
      {titleJP: "新着情報",         titleENG: "Information",     path: "/information",   icon:"mdi-home-outline"},
      {titleJP: "プロフィール",      titleENG: "Profile",  path: "/profile",    icon:"mdi-account-outline"},
      {titleJP: "趣味",             titleENG: "Hobby",    path: "/hobby",       icon:"mdi-gamepad-variant-outline"},
      {titleJP: "個人プロジェクト",  titleENG: "Project",    path: "/project",   icon:"mdi-file-code-outline"},
      {titleJP: "連絡",             titleENG: "Contact",    path: "/contact",   icon:"mdi-card-account-mail-outline"},
    ]
  }),
});
</script>
