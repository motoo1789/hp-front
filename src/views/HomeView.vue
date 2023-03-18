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
          @click="changeComponent(sidelist.titleENG)"
        >
          <router-link :to="sidelist.path" > {{ sidelist.titleJP }}</router-link> 
        </v-list-item> 
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="blue-b">
        <v-container>
          <router-view /> 
        </v-container> 
      </div>
      
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
      {titleJP: "ホーム",       titleENG: "Home",     path: "/",        icon:"mdi-home-outline", link: {name: "home"}},
      {titleJP: "プロフィール",  titleENG: "Profile",  path: "/profile", icon:"mdi-account-outline",link: {name: "profile"}},
      {titleJP: "ホビー",       titleENG: "Hobby",    path: "/hobby",   icon:"mdi-gamepad-variant-outline", link: {name: "hobby"}},
    ]
  }),
});
</script>
