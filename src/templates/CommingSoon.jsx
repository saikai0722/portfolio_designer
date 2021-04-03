import React from 'react';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"




const CommingSoon = () => {
    const dispatch = useDispatch();

    return(
            <section>
                <div class="container">
                    <p class="commingsoon_message">ただいま準備中です。</p>
                </div>
            </section>
    )
}

export default CommingSoon