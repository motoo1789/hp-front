<template>
  <InformationHistoryList />
</template>

<script>
import { defineComponent } from 'vue';

import InformationHistoryList from '../components/InformationHistoryList.vue';

export default defineComponent ({
    name: 'InformationView',

    components: {
      InformationHistoryList
    },
})
</script>

<style>

</style>