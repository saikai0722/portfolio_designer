import React from 'react';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"
import works_sunao_01 from "../../assets/img/works/site/works_sunao_01.jpg";
import works_sunao_02 from "../../assets/img/works/site/works_sunao_02.jpg";
import works_sunao_03 from "../../assets/img/works/site/works_sunao_03.jpg";
import works_sunao_04 from "../../assets/img/works/site/works_sunao_04.jpg";

const Sunao = () => {
    const dispatch = useDispatch();

    return(
            <>
            <div class="under_top">
                <div class="mv">
                    <h2 class="page_title">制作実績</h2>
                </div>
                <nav class="container breadcrumbs">
                    <ul>
                        <li><a href="javascript:void(0)" onClick={() => dispatch(push('/'))}>HOME</a></li>
                        <li>すなおクリニック様 公式サイト</li>
                    </ul>
                </nav>
            </div>
                <section class="bg_color_mono_clear padding_v_large">
                    <div class="container">
                        <h2 class="headline">
                            すなおクリニック様<br/>公式サイト
                            <span class="headline_large_en">sunao clinic</span>
                        </h2>

                        <div class="site_images">
                            <img src={works_sunao_01} alt="" />
                        </div>
                        <div class="site_info_box">
                            <div class="site_info_item">
                                <h4 class="headline">クライアント</h4>
                                <p class="site_info_text">すなおクリニック様</p>
                                <h4 class="headline">サイト規模</h4>
                                <p class="site_info_text">133ページ</p>
                                <h4 class="headline">URL</h4>
                                <p class="site_info_text">https://sunao-clinic.com/</p>
                                <h4 class="headline">月間PV数（2021/01）</h4>
                                <p class="site_info_text">43,994</p>
                            </div>
                            <div class="site_info_item">
                                <h4 class="headline">主な担当業務</h4>
                                <ul class="list_link">
                                    <li>新規ページ作成・ページ改修</li>
                                    <li>キャンペーンページ作成</li>
                                </ul>
                                <h4 class="headline">言語</h4>
                                <p>
                                    <span class="lable">HTML</span>
                                    <span class="lable">css</span>
                                    <span class="lable">sass</span>
                                    <span class="lable">cakePHP</span>
                                </p>
                            </div>
                        </div>
                        <div class="site_images">
                            <img src={works_sunao_02} alt="" />
                        </div>
                        <div class="site_images">
                            <img src={works_sunao_03} alt="" />
                        </div>
                        <div class="site_images">
                            <img src={works_sunao_04} alt="" />
                        </div>
                        <div class="link_box">
                            <a href="javascript:void(0)" onClick={() => dispatch(push('/ayabe'))} class="btn_link btn_link_back">戻る</a>
                            <a href="javascript:void(0)" onClick={() => dispatch(push('/femmyikebukuro'))} class="btn_link btn_link_next">次へ</a>
                        </div>
                        <div class="link_box">
                            <a href="javascript:void(0)" onClick={() => dispatch(push('/'))} class="btn_link btn_link_back">実績一覧に戻る</a>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default Sunao