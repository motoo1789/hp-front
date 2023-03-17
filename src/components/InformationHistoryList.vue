<template>
  <div>
    <div class="text-subtitle-2 mb-2">新着情報</div>
      <v-expansion-panels>
          <v-expansion-panel
              v-for="(newinformation, key) in jsonhistory[this.currentpage - 1].contents"
              :key="key"
              
          >
            <v-expansion-panel-title>{{ newinformation.updatedate }}   {{ newinformation.abstract }}</v-expansion-panel-title>
            <v-expansion-panel-text>{{ newinformation.detaile }}</v-expansion-panel-text>
          </v-expansion-panel>
      </v-expansion-panels>
      <!-- <v-table>  詳細を別リンクで作るんならこっち
        <tbody>
            <tr
            v-for="(newinformation, key) in homepageNewInformations"
            :key="key"
            >
            <td>{{ newinformation.updatedate }}</td>
            <td>{{ newinformation.abstract }}</td>
            </tr>
        </tbody>
      </v-table> -->
      <div class="text-center">
        <v-pagination
          v-model="currentpage"
          :length=jsonhistory.length
          :total-visible="3"
          @input="onPageChange"
        ></v-pagination>
      </div>
  </div>
</template>

<script>

export default {
  nama: "InformationHistoryList",

  data () {
    return {
      currentpage: 1,
      jsonhistory: [
        {
          page: 1,
          contents: [
            {
              updatedate: '2022/01/01',
              abstract: "新年の挨拶",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",

            },
            {
              updatedate: '2022/01/02',
              abstract: "新年の挨拶",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",
            },
            {
              updatedate: '2022/01/03',
              abstract: "サンプル　新年",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",
            },
            {
              updatedate: '2022/01/04',
              abstract: "サンプル　fdsfsafサンプル　fdsfsaf",
              detaile: " 林檎ゴリラ　サンプル　fdsfsaf",
            },
            {
              updatedate: '2022/01/05',
              abstract: "キーボードキーボード",
              detaile: "キーボードキーボードキーボードキーボードキーボードキーボード",
            }
          ]
        },
        {
          page: 2 ,
          contents: [
            {
              updatedate: '2022/01/06',
              abstract: "サンプル　新年",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",
            },
            {
              updatedate: '2022/01/07',
              abstract: "サンプル　新年",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",
            },
            {
              updatedate: '2022/01/08',
              abstract: "サンプル　新年",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",
            },
            {
              updatedate: '2022/01/09',
              abstract: "新年の挨拶",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",

            },
            {
              updatedate: '2022/01/10',
              abstract: "新年の挨拶",
              detaile: "サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年サンプル　新年",

            },
          ]
        }
      ],
    }
  },
  created() {
    console.log(this.books)
  },
  methods : {
    onPageChange() {
      console.log(`page changed to ${this.page}`)
    }
  }
}
</script>

<style>

</style>