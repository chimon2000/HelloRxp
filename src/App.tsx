/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import { Component, Navigator, Types } from 'reactxp'
import MainPanel from './MainPanel'
import SecondPanel from './SecondPanel'

enum NavigationRouteId {
    MainPanel,
    SecondPanel,
}

const styles = {
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff',
    }),
};

class App extends Component<null, null> {
    private _navigator: Navigator;

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.MainPanel,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.Fade,
        }]);
    }

    render() {
        return (
            <RX.Navigator
                ref={this._onNavigatorRef}
                renderScene={this._renderScene}
                cardStyle={styles.navCardStyle}
            />
        );
    }

    private _onNavigatorRef = (navigator: Navigator) => {
        this._navigator = navigator;
    }

    private _renderScene = (navigatorRoute: Types.NavigatorRoute) => {
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.MainPanel:
                return <MainPanel onPressNavigate={this._onPressNavigate} />

            case NavigationRouteId.SecondPanel:
                return <SecondPanel onNavigateBack={this._onPressBack} />

            default:
                return null
        }
    }

    private _onPressNavigate = () => {
        this._navigator.push({
            routeId: NavigationRouteId.SecondPanel,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true,
            },
        });
    }

    private _onPressBack = () => {
        this._navigator.pop();
    }
}

export default App