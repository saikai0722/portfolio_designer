import React from 'react';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"
import project_shinwa_01 from "../../assets/img/works/project/project_shinwa_01.jpg";
import project_shinwa_02 from "../../assets/img/works/project/project_shinwa_02.jpg";
import project_shinwa_03 from "../../assets/img/works/project/project_shinwa_03.jpg";
import project_shinwa_04 from "../../assets/img/works/project/project_shinwa_04.jpg";
import project_shinwa_05 from "../../assets/img/works/project/project_shinwa_05.jpg";

const ShinwaProject = () => {
    const dispatch = useDispatch();

    return(
            <>
            <div class="under_top">
                <div class="mv">
                    <h2 class="page_title">制作実績</h2>
                </div>
                <nav class="container_min breadcrumbs">
                    <ul>
                        <li><a href="javascript:void(0)" onClick={() => dispatch(push('/'))}>HOME</a></li>
                        <li><a href="javascript:void(0)" onClick={() => dispatch(push('/shinwa'))}>親和クリニック様 公式サイト</a></li>
                        <li>プロジェクトの説明</li>
                    </ul>
                </nav>
            </div>
                <section class="padding_v_large">
                    <div class="container_min">
                        <h2 class="headline">
                        プロジェクトの説明
                        <span class="headline_large_en">project</span>
                        </h2>
                        <div class="paragraph">
                            <p>
                                薄毛治療専門クリニックである親和クリニック様の新規コンテンツ作成のプロジェクトに参加。<br/>
                                <span class="font_color_accent">ページデザイン</span>と<span class="font_color_accent">コーディング</span>を担当。
                            </p>
                            <p>URL：https://shinwa-clinic.jp/pickup/beginner/price/　等</p>
                            <p>
                                <img src={project_shinwa_01} alt="" />
                            </p>
                            <hr class="no_border_medium"/>
                            <h3 class="headline">
                                親和クリニック様について
                            </h3>
                            <p>
                                薄毛治療専門クリニックの親和クリニック様。メスを使用せず傷跡も残らない、短時間で高密度な自毛植毛を強みとし、東京・名古屋・大阪・福岡にクリニックを展開。<br/>
                                自毛植毛は医師や技術力だけでなく医師・看護師・スタッフの実績や経験が重要と考え、看護師やカウンセラーなどスタッフ様の露出も積極的に行い、施術への恐怖心を払拭することなどを目指し本サイトを運営されています。
                            </p>
                            <hr class="no_border_medium"/>
                            <h3 class="headline">
                                企画概要
                            </h3>
                            <p>
                            薄毛に悩みを抱えている方に対して情報を発信。より明確なターゲットを設定したコンテンツを作成することで更なる訴求を目指す。<br/>
                            親和クリニック様は積極的にモニター募集をされており、コンバージョンが求められる。今回はその前段階にあたる下記2点を目的に設定する。<br/>
                            <span class="font_color_accent">①「自毛植毛」という選択肢があること</span><br/>
                            <span class="font_color_accent">②同院の「自毛植毛」施術への理解を深めてもらうこと</span>
                            </p>
                            <p>
                                制作期間：2週間（デザイン・コーディング：約3日間）
                            </p>
                            <hr class="no_border_medium"/>
                            <h3 class="headline">
                                ターゲット
                            </h3>
                            <p>
                            薄毛に悩みを抱えており、<span class="font_color_accent">自毛植毛について予備知識がない方</span>や<span class="font_color_accent">施術に恐怖心や不安を抱いている方</span>
                            </p>
                            <hr class="no_border_medium"/>
                            <h3 class="headline">
                                企画内容
                            </h3>
                            <p>
                            <span class="font_color_accent">「はじめての自毛植毛 疑問解消講座」</span>と題して、医師や看護師、カウンセラーなどのクリニックスタッフが施術について解説するコンテンツを作成。
                            </p>
                            <p>
                            <span class="font_color_accent">薄毛で悩む方が抱く不安や疑問点を代弁するキャラクターを立てる</span>。モニター施術に来院された方の中からお一人様にご協力を仰ぎ、自毛植毛施術に興味がある方の代弁役として企画に参加していただくことになる。
                            </p>
                            <p>
                            今回ピックアップした方は、人気バイクショップ「ホワイトベース」の店長であり、ツーリング動画やバイク整備のノウハウを発信するYouTuberとしてご活躍されている二宮祥平様を代弁者としてピックアップ。YouTubeチャンネル登録者数は37万人を超えておりその影響力も期待できる。二宮さん自身、おでこの幅が年々広がっていること気にされており、2020年に同院へ来院。自毛植毛の施術のひとつである「MIRAI法」で2,000株の手術を実施。
                            </p>
                            <p>
                            クリニックスタッフと会話形式で解説していく<span class="font_color_accent">カジュアルなコンテンツにすることで読むハードルを下げる</span>。会話の中で浮上する疑問点をその都度解消してもらうために、他のコラム記事への導線を設置。回遊率を高める。
                            </p>
                            <p>
                                <img src={project_shinwa_02} alt="" />
                            </p>
                            <hr class="no_border_medium"/>
                            <p>
                            検索キーワードやコラム記事のPV数から、特に関心の高いと予想される「費用」「痛み」「安全性」「術後」についてコンテンツを作成。
                            </p>
                            <hr class="no_border_medium"/>
                            <h3 class="headline">
                            企画の流れ
                            </h3>
                            <h4 class="headline">①企画立案</h4>
                            <p>
                            ・弊社担当者より本企画を親和クリニック様にご提案。
                            </p>
                            <h4 class="headline">②ミーティング</h4>
                            <p>
                            ・クライアントと内容を精査。
                            </p>
                            <h4 class="headline">③制作（ページデザイン・コーディング）</h4>
                            <p>
                            「費用」「痛み」「安全性」「術後」「はじめての自毛植毛 疑問解消講座TOP」の<span class="font_color_accent">計5ページと導線設置を担当</span><br/>
                            下記<span class="font_color_accent">意識したポイント</span>や<span class="font_color_accent">ご提案させていただいたアイディア</span><br/>
                            ・チャット画面のように質問者と回答者を配置することをご提案。会話しているイメージを鮮明に。<br/>
                            ・モバイル端末での見やすさ、会話のテンポ感を意識。（67%がモバイル端末からのアクセス）<br/>
                            ・質問者と回答者のアイコンとなる素材を複数枚用意。会話の内容によって「驚いた表情」や「悩んでいる表情」を使い分け、会話そのものの雰囲気を演出。
                            </p>
                            <h4 class="headline">④リリース</h4>
                            <hr class="no_border_medium"/>
                            <div class="row">
                                <div class="col-sm-6 margin_b_small">
                                        <img src={project_shinwa_03} alt="" />
                                </div>
                                <div class="col-sm-6 margin_b_small">
                                        <img src={project_shinwa_04} alt="" />
                                </div>
                            </div>
                            <p>
                                <img src={project_shinwa_05} alt="" />
                            </p>
                            <hr class="no_border_medium"/>
                            <h3 class="headline">
                            本プロジェクトの効果
                            </h3>
                            <ul class="list_link">
                                <li>目標PV数の125%を達成</li>
                                <li>サイト全体のセッション数の向上</li>
                                <li>平均滞在時間の改善（1:12 → 2:02）</li>
                                <li>無料カウンセリングへの問い合わせ増加（2020年12月前月比＋12件）</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default ShinwaProject