<template>
  <div>
    <v-card
        class="mx-auto"
        shaped="true"
        v-for="(project, key) in projects"
        :key="key"
    >
        <v-container>
            <v-row justify="start">
                <v-col  cols="5"> 自分の写真
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200px"
                    ></v-img>
                </v-col>

                <v-col cols="7">
                    <v-row align="center">
                        <v-col cols="11">
                            <v-card-title > {{ project.title }} </v-card-title>
                        </v-col>
                        <v-cols cols="1">
                            <v-icon
                                large
                                @click="jumpGithubPage(project.url)"
                            >
                                mdi-github                       
                            </v-icon>
                        </v-cols>
                    </v-row>
                    
                    <v-divider></v-divider>

                    
                    <v-divider></v-divider>
                    <v-card-title>概要</v-card-title>
                    <v-row class="ma-2" align="center">
                        {{ project.abstract }}
                    </v-row>
                    <v-divider></v-divider>
                    <v-row>
                        <v-col cols="9">
                        </v-col>
                        <v-col cols="3" class="my-2">

                            <v-btn 
                                rounded="lg"
                                color="infoBlue"
                                @click="openDialogProjectDetail(project)"
                            >
                                詳細
                            </v-btn>
                            

                            <v-dialog
                                v-model="dialogProjectDetail"
                                max-width="750"
                            >
                                <!-- <template v-slot:activator="{ on }"> いらないのでは
                                    <v-btn
                                        rounded="lg"
                                        color="infoBlue"
                                        v-on="on"
                                    >
                                        詳細
                                    </v-btn>
                                </template> -->
                                <v-card>

                                    <v-card-title> {{ showDialogProject.title }}</v-card-title>

                                    <v-row class="ma-2" align="center">
                                        <v-col>開発環境</v-col>
                                        <v-col>
                                            <v-row  align-content="center" class="blue-b"> 言語</v-row>
                                            <v-row  align-content="center" class="blue-b"> フレームワーク</v-row>
                                            <v-row  align-content="center"> ライブラリ</v-row>
                                        </v-col>
                                        <v-col>
                                            <v-row align-content="center"> {{ showDialogProject.environments.language }}</v-row>
                                            <v-row align-content="center"> {{ showDialogProject.environments.framework }}</v-row>
                                            <v-row align-content="center"> {{ showDialogProject.environments.library }}</v-row>
                                        </v-col>
                                    </v-row>

                                    <v-card-text> {{ showDialogProject.detail }}</v-card-text>
                                    
                                    <v-row>
                                        <v-col>
                                            <v-icon
                                                large
                                                @click="jumpGithubPage(showDialogProject.url)"
                                            >
                                                mdi-github                       
                                            </v-icon>
                                        </v-col>
                                        <v-col>
                                            <v-card-actions>
                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="closeDialogProjectDetail"
                                                >
                                                    Cancel
                                                </v-btn>
                                            </v-card-actions>
                                        </v-col>
                                    </v-row>

                                    
                                </v-card>
                                
                            </v-dialog>
                            
                            
                        </v-col>
                    </v-row>
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
            dialogProjectDetail: false,
            selectProjectIndex: -1,
            showDialogProject: {},
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
        jumpGithubPage( url ) {
            window.open(url, '_blank')
        },
        closeDialogProjectDetail() {
            this.dialogProjectDetail = false
        },
        openDialogProjectDetail( project ) {
            this.selectProjectIndex = this.projects.indexOf(project)
            this.showDialogProject = Object.assign({}, project)
            this.dialogProjectDetail = true
        }
    }
}
</script>

<style>
.custom-font-color-white {
    color: white,
    
}
.aa{
    color : #2196F3;
}
</style>