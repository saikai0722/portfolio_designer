import React from 'react';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"
import topMv from "../assets/img/top_mv.png";
import topMvSp from "../assets/img/top_mv_sp.png";
import works_thmb_shinwa from "../assets/img/works/site/works_thmb_shinwa.jpg";
import works_thmb_femmy_shibuya from "../assets/img/works/site/works_thmb_femmy_shibuya.jpg";
import works_thmb_ayabe from "../assets/img/works/site/works_thmb_ayabe.jpg";
import works_thmb_sunao from "../assets/img/works/site/works_thmb_sunao.jpg";
import works_thmb_femmy_ikebukuro from "../assets/img/works/site/works_thmb_femmy_ikebukuro.jpg";
import works_thmb_agora from "../assets/img/works/site/works_thmb_agora.jpg";
import works_thmb_uke from "../assets/img/works/site/works_thmb_uke.jpg";
import works_thmb_mary from "../assets/img/works/site/works_thmb_mary.jpg";
import works_thmb_laketown from "../assets/img/works/site/works_thmb_laketown.jpg";
import worksBanner035 from "../assets/img/works/banner/banner_035.jpg";
import worksBanner034 from "../assets/img/works/banner/banner_034.jpg";
import worksBanner033 from "../assets/img/works/banner/banner_033.jpg";
import worksBanner032 from "../assets/img/works/banner/banner_032.jpg";
import worksBanner031 from "../assets/img/works/banner/banner_031.jpg";
import worksBanner030 from "../assets/img/works/banner/banner_030.jpg";
import worksBanner029 from "../assets/img/works/banner/banner_029.jpg";
import worksBanner028 from "../assets/img/works/banner/banner_028.jpg";
import worksBanner020 from "../assets/img/works/banner/banner_020.jpg";
import worksBanner014 from "../assets/img/works/banner/banner_014.jpg";
import worksBanner011 from "../assets/img/works/banner/banner_011.jpg";
import worksBanner008 from "../assets/img/works/banner/banner_008.png";
import works_lake_pop_01 from "../assets/img/works/pop/works_lake_pop_01.jpg";
import works_lake_pop_02 from "../assets/img/works/pop/works_lake_pop_02.jpg";
import works_lake_pop_03 from "../assets/img/works/pop/works_lake_pop_03.jpg";
import works_lake_pop_04 from "../assets/img/works/pop/works_lake_pop_04.jpg";

const Home = () => {
    const dispatch = useDispatch();

    return(
        <>
            <section>
                <div class="fv fv_bg">
                    <img alt="" src={topMv} class="pc" />
                    <img alt="" src={topMvSp} class="sp" />
                    <div class="hero_text_box">
                    <p class="hero_text">ポートフォリオサイト</p>
                        <h2 class="hero_title">Portfolio Site</h2>
                        
                        <p className="hero_text_min">Web制作を通して世の中を豊かにする。</p>
                        <p className="hero_text_min">誰かの心に響くものを作る。</p>
                        <p className="hero_text_min">「伝える」を大切にWeb制作に向き合う。</p>
                    </div>
                    <div href="javascript:void(0)" class="scroll_line">scroll</div>
                </div>
            </section>

            <section>
                <div class="container">
                    <h2 class="headline" id="works">制作実績<span class="headline_large_en">Works</span></h2>
                    <hr class="no_border_small"/>
                    <h3 class="headline">Web</h3>
                    <div class="works_wrapper">
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/shinwa'))}>
                            <figure class="works_img">
                                <img src={works_thmb_shinwa} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                親和クリニック様 公式サイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/femmyshibuya'))}>
                            <figure class="works_img">
                                <img src={works_thmb_femmy_shibuya} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                フェミークリニック渋谷院様　公式サイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/ayabe'))}>
                            <figure class="works_img">
                                <img src={works_thmb_ayabe} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                あやべクリニック様　公式サイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/sunao'))}>
                            <figure class="works_img">
                                <img src={works_thmb_sunao} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                すなおクリニック様　公式サイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/femmyikebukuro'))}>
                            <figure class="works_img">
                                <img src={works_thmb_femmy_ikebukuro} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                フェミークリニック池袋院様　公式サイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/agora'))}>
                            <figure class="works_img">
                                <img src={works_thmb_agora} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                フェミークリニック様　コスメECサイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/ukedental'))}>
                            <figure class="works_img">
                                <img src={works_thmb_uke} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                宇毛デンタルオフィス様　公式サイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/meary'))}>
                            <figure class="works_img">
                                <img src={works_thmb_mary} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                メアリクリニック様　公式サイト
                            </p>
                        </a>
                        <a href="javascript:void(0)" class="works_item" onClick={() => dispatch(push('/lake'))}>
                            <figure class="works_img">
                                <img src={works_thmb_laketown} alt="" />
                            </figure>
                            <p class="works_title">
                                <span>Webサイト</span><br/>
                                レイクタウンクリニック様　公式サイト
                            </p>
                        </a>
                    </div>
                    <hr class="no_border_small"/>
                    <h3 class="headline">Banner</h3>
                    <div class="works_wrapper">
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner035} alt="静岡美容外科橋本クリニック様　「美容医療の口コミ広場」用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>「美容医療の口コミ広場」用バナー</span><br/>
                                静岡美容外科橋本クリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner034} alt="K-1選手　河北光生様　PandoページMV" />
                            </figure>
                            <p class="works_title">
                                <span>PandoページMV</span><br/>
                                K-1選手　河北光生様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner033} alt="K-1選手　河北光生様　PandoページMV" />
                            </figure>
                            <p class="works_title">
                                <span>PandoページMV</span><br/>
                                K-1選手　河北光生様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner031} alt="桜花クリニック様　ディスプレイ広告バナー" />
                            </figure>
                            <p class="works_title">
                                <span>ディスプレイ広告バナー</span><br/>
                                桜花クリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner030} alt="ローズマリークリニック様　Instagram配信用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>Instagram配信用バナー</span><br/>
                                ローズマリークリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner028} alt="ローズマリークリニック様　Instagram配信用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>Instagram配信用バナー</span><br/>
                                ローズマリークリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner032} alt="アーククリニック様　「美容医療の口コミ広場」用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>「美容医療の口コミ広場」用バナー</span><br/>
                                アーククリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner029} alt="クリニック　エヌ様　「美容医療の口コミ広場」用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>「美容医療の口コミ広場」用バナー</span><br/>
                                クリニック　エヌ様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner020} alt="銀座みゆき通り美容外科様　「美容医療の口コミ広場」用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>「美容医療の口コミ広場」用バナー</span><br/>
                                銀座みゆき通り美容外科様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner014} alt="ゆうきクリニック様　「美容医療の口コミ広場」用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>「美容医療の口コミ広場」用バナー</span><br/>
                                ゆうきクリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner011} alt="ルラクリニック様　「美容医療の口コミ広場」用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>「美容医療の口コミ広場」用バナー</span><br/>
                                ルラクリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={worksBanner008} alt="グラシアクリニック様　「美容医療の口コミ広場」用バナー" />
                            </figure>
                            <p class="works_title">
                                <span>「美容医療の口コミ広場」用バナー</span><br/>
                                グラシアクリニック様
                            </p>
                        </div>
                    </div>
                    <hr class="no_border_small"/>
                    <h3 class="headline">DTP</h3>
                    <div class="works_wrapper">
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={works_lake_pop_01} alt="レイクタウンクリニック様　院内配布用pop" />
                            </figure>
                            <p class="works_title">
                                <span>院内配布用pop</span><br/>
                                レイクタウンクリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={works_lake_pop_02} alt="レイクタウンクリニック様　院内配布用pop" />
                            </figure>
                            <p class="works_title">
                            <span>院内配布用pop</span><br/>
                                レイクタウンクリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={works_lake_pop_03} alt="レイクタウンクリニック様　院内配布用pop" />
                            </figure>
                            <p class="works_title">
                            <span>院内配布用pop</span><br/>
                                レイクタウンクリニック様
                            </p>
                        </div>
                        <div class="works_item">
                            <figure class="works_img">
                                <img src={works_lake_pop_04} alt="レイクタウンクリニック様　院内配布用pop" />
                            </figure>
                            <p class="works_title">
                            <span>院内配布用pop</span><br/>
                                レイクタウンクリニック様
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section class="bg_accent">
                <div class="container">
                    <h2 class="headline">私について<span class="headline_large_en">About</span></h2>
                    
                    <h3 class="headline">自己紹介</h3>
                    <div class="paragraph">
                        <p>
                            現在Webデザイナー兼コーダーとしてWebマーケティング支援事業に携わっています。<br/>
                            あるゲームのティザーサイトに感動したことがきっかけでWebデザイナーになりました。<br/>
                            「あの時の心に響いた体験を今度は私の手で誰かに届けたい」そんな想いでWeb制作に向き合っています。<br/>
                            趣味は「アニメ」「カメラ」「ゲーム」「釣り」です。
                        </p>
                    </div>

                    <h3 class="headline">ビジョン・マインド</h3>
                    <div class="paragraph">
                        <p>
                            私はWebを通して世の中をより豊かにしたいと考えています。クライアント様には自身を信じて挑戦し続けていただきたいと思いますし、ユーザーには心に響く体験をしていただきたいと思っています。<br/>
                            Webコンテンツではそれらに大きく貢献できると考えています。誰もがWebが生み出す価値を享受できる世の中にするために、Web制作と向き合っていきたいと考えています。
                        </p>
                    </div>

                    <h3 class="headline">スキル</h3>
                    <div class="paragraph">
                        <p>
                            【制作ソフト】 Photoshop、Illustrator、XD、Dreamwerver
                        </p>
                        <p>
                            【言語】 HTML、CSS、Scss、JavaScript、jQuery
                        </p>
                        <p>
                            【フレームワーク・タスクランナー】 cakePHP、gulp
                        </p>
                        <p>
                            【その他】 GitHub（バージョン管理）、Redmine（タスク管理）、Office系ソフト、Googleスプレッドシート、Chatwork ...etc
                        </p>
                    </div>

                    <h3 class="headline">経験・主な業務内容</h3>
                    <div class="paragraph">
                    <h4 class="headline">デザイナー</h4>
                        <p>
                        ・ページデザイン(メインビジュアル、同線バナー含む)<br/>
                        ・自社サービス「美容医療の口コミ広場（https://report.clinic/）」掲載用バナー制作<br/>
                        ・SNS配信用広告バナー、GDNやYDNバナー作成<br/>
                        ・配布用チラシ等のDTP制作、入稿データ制作<br/>
                        </p>
                        <p>
                            主にPhotoshop、Illustratorを使用して制作を行っています。時にはクライアント先に伺い、サイト内の素材として写真撮影を行うこともあり、業務幅の大きいポジションを経験させていただきました。
                        </p>
                        <hr class="no_border_small"/>
                        <h4 class="headline">コーダー</h4>
                        <p>
                        ・カンプを元にコーディング<br/>
                        ・jQueryプラグイン導入・カスタマイズ<br/>
                        ・技術コラム記述<br/>
                        ・チーム内コードレビュー<br/>
                        ・弊社独自のcssフレームワークの保守<br/>
                        </p>
                        <p>
                            独自フレームワーク(cakePHPを改良したもの)でクライアントのWebサイトを運用しています。コーディングはメンバー間のスキル差により成果物のクオリティに差を生じさせないために、弊社独自のcssフレームワーク(scss)を運用しています。GitHubでのバージョン管理やチーム内でコードレビューを行うなどチーム開発では欠かせない工程なども経験して参りました。
                        </p>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Home