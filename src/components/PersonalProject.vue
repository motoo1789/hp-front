<template>
  <div>
    <v-card
        class="mx-auto"
        shaped="true"
        v-for="(project, key) in projects"
        :key="key"
    >
        <v-container>
            <v-row class="blue-b" justify="start">
                <v-col class="red-b" cols="5"> 自分の写真
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200px"
                    ></v-img>
                </v-col>

                <v-col class="green-b" cols="7">
                    <v-row align="center">
                        <v-col cols="11">
                            <v-card-title > {{ project.title }} </v-card-title>
                        </v-col>
                        <v-cols cols="1">
                            <v-icon
                                large
                                @click="jumpGithubPage(key)"
                            >
                                mdi-github                       
                            </v-icon>
                        </v-cols>
                    </v-row>
                    
                    <v-divider></v-divider>

                    <v-row class="ma-2" align="center">
                        <v-col>開発環境</v-col>
                        <v-col>
                            <v-row> 言語</v-row>
                            <v-row> フレームワーク</v-row>
                            <v-row> ライブラリ</v-row>
                        </v-col>
                        <v-col>
                            <v-row> {{ project.environments.language }}</v-row>
                            <v-row> {{ project.environments.framework }}</v-row>
                            <v-row> {{ project.environments.library }}</v-row>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-card-title>概要</v-card-title>

                    <v-card-text>
                        <div> {{ project.abstract }} </div>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-container>
        
    </v-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    projectNum: 1,
                    title: "WinRate",
                    environments: {
                        language: "Java",
                        framework:"Eclipse",
                        library: "OpenCV",
                    },
                    abstract: "シャドウバースの勝敗記録をするアプリケーション",
                    detail: "シャドウバースの勝敗記録をするアプリケーションシャドウバースの勝敗記録をするアプリケーションシャドウバースの勝敗記録をするアプリケーションシャドウバースの勝敗記録をするアプリケーションシャドウバースの勝敗記録をするアプリケーションシャドウバースの勝敗記録をするアプリケーション",
                    url: "https://github.com/motoo1789/WinRate",
                    img: "パス",
                },
                {
                    projectNum: 2,
                    title: "UMLDS",
                    environments: {
                        language: "Java",
                        framework:"Eclipse GWT",
                        library: "JeroMQ GWTUMLDrawer",
                    },
                    abstract: "修士研究で作成したアプリケーション描画部分",
                    detail: "修士研究で作成したアプリケーション修士研究で作成したアプリケーション描画部分修士研究で作成したアプリケーション描画部分修士研究で作成したアプリケーション描画部分修士研究で作成したアプリケーション描画部分修士研究で作成したアプリケーション描画部分",
                    url: "https://github.com/motoo1789/KIfU-drawer",
                    img: "パス",
                },
                
            ]
        }
    },
    methods: {
        jumpGithubPage( key ) {
            window.open(this.projects[key].url, '_blank')
            console.log(key)
        }
    }
}
</script>

<style>

</style>