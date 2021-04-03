import React from 'react';
import {Route, Switch} from 'react-router';
import {Home, Shinwa, Femmyshibuya, Ayabe, Sunao, Femmyikebukuro, Agora, Ukedental, Meary, Lake, ShinwaProject} from './templates';

const Router = () => {
    return (
        <Switch>
            <Route exact path={"(/)?"} component={Home} />
            
            <Route exact path={"/shinwa"} component={Shinwa} />
            <Route exact path={"/femmyshibuya"} component={Femmyshibuya} />
            <Route exact path={"/ayabe"} component={Ayabe} />
            <Route exact path={"/sunao"} component={Sunao} />
            <Route exact path={"/femmyikebukuro"} component={Femmyikebukuro} />
            <Route exact path={"/agora"} component={Agora} />
            <Route exact path={"/ukedental"} component={Ukedental} />
            <Route exact path={"/meary"} component={Meary} />
            <Route exact path={"/lake"} component={Lake} />

            <Route exact path={"/shinwa/project"} component={ShinwaProject} />
        </Switch>
    );
};

export default Router;