<template>
    <v-container>
    <div>
    <v-card
        class="mx-auto"
        shaped="true"
        
    >
  
        <v-row class="blue-b" justify="start">
            <v-col class="red-b" cols="5"> 自分の写真
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                ></v-img>
            </v-col>

            <v-col class="green-b" cols="7">
                <v-card-title>
                    名前：山崎 貴弘
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div>小学生の頃にゲームが作りたくて工業高校情報科に進学。進学後プログラミングの面白さはゲーム作りだけではないと気づき、エンジニアになるため情報科の大学へ進学を決意。
                        大学で勉強をしていく中でソフトウェアの作り方について知識をつけたいと考えソフトウェア工学を大学院まで研究していました。<br>
                        研究の影響もあり、将来はアーキテクトに強いエンジニアになります。
                        とか言いながらも趣味を捨てきることができない人間で、ゲームやアニメ、ライトノベル、漫画など自分を形成してきた文化を大切にしていきながら仕事をしていきたいです。
                    </div>
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>

    <v-card
        class="mx-auto"
        
    >
  
        <v-row class="blue-b" justify="start">
            <v-col class="red-b" cols="5"> 学生のアイコン
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                ></v-img>
            </v-col>

            <v-col class="green-b" cols="7">
                <v-timeline side="end">
                    <v-timeline-item  
                        v-for="history in histories"
                        :key="history.id"
                        dot-color="#82b0ff"
                    >
                        {{ history.text }}
                        
                    </v-timeline-item>
                    
                    
                </v-timeline>
            </v-col>
        </v-row>
    </v-card>

    <v-card
        class="mx-auto"
        
    >
  
        <v-row class="blue-b" justify="start">
            <v-col class="red-b" cols="5"> 発表
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                ></v-img>
            </v-col>

            <v-col class="green-b" cols="7">
                <v-list-item
                    v-for="(presentation,key) in presentations"
                    :key="key"
                >
                    <template>
                        <v-text-field :message="presentation.date"></v-text-field>
                    </template>




                    <v-list-item-content>
                        <v-list-item-title v-text="presentation.title"></v-list-item-title>
                    </v-list-item-content>

                
                </v-list-item>
                    
            
                
            </v-col>
        </v-row>
    </v-card>

    プロフィール用のカードを作るコンポーネントだよ
    
  </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
                histories: [
                    {
                        id: 1,
                        text: "日本工業大学工学部情報工学科 卒業",
                    },
                    {
                        id: 2,
                        text: "日本工業大学工学研究科電子情報メディア工学専攻博士前期課程 修了見込み"
                    }
                ],
                presentations: [
                    {
                        date: '2021-02-23',
                        title: 'パターンの役割違反に着目したコード品質改善手法の提案',
                        url: "https://www.ieice-taikai.jp/2021general/jpn/index.html"

                    },
                    {
                        date: '2022-01-21',
                        title: 'クラス図とソースコード間のラウンドトリップエンジニアリング支援ツール',
                        url: "https://ken.ieice.org/ken/program/index.php?tgs_regid=c7e66ae8eec06d72f88ac1147e021d278969659589d143d7de3bb4d5e2aaa315&tgid=IEICE-KBSE"
                    }
                ]
            
        }
    },
}
</script>

<style>
.blue-b{
    border: 1px blue solid
}

.green-b{
    border: 1px green solid
}

.red-b{
    border: 1px red solid
}
</style>