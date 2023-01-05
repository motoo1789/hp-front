<template>
  <InformationHistoryList />
  <v-chip variant="text" @click="showNewInformationHistory">
    >> 履歴を見る
  </v-chip>
</template>

<script>
import { defineComponent } from 'vue';

import InformationHistoryList from '../components/InformationHistoryList.vue';

export default defineComponent ({
    name: 'InformationView',

    components: {
      InformationHistoryList
    },
    data () {
    return {
      books: [
        {page: 1, title:'タイトル1', content:'本の内容1'},
        {page: 2, title:'タイトル2', content:'本の内容2'}
      ],
      index: 0
      
    }
  },
  methods : {
      showNewInformationHistory() {
          console.log("チップをクリックしました")
          this.$router.push({
            name:'InformationHistoryList',
            params:{
              page: this.books[this.index].page,
              title: this.books[this.index].title,
              content: this.books[this.index].content
            }
          })
      }
  }
})
</script>

<style>

</style>