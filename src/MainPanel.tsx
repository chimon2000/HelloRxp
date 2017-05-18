/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import { Animated, Button, Component, Link, ScrollView, Styles, Text, View } from 'reactxp'

import ButtonStyles from './styles/button'

interface MainPanelProps {
    onPressNavigate: () => void;
}

const styles = {
    scroll: Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff',
    }),
    container: Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    helloWorld: Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28,
    }),
    welcome: Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12,
    }),
    instructions: Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16,
    }),
    docLink: Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16,
    }),
    roundButton: Styles.createButtonStyle({
        ...ButtonStyles.button,
        ...ButtonStyles.buttonRaised,
    }),
    buttonText: Styles.createTextStyle({
        ...ButtonStyles.buttonLabel,
        ...ButtonStyles.buttonLabelRaised,
    }),
}

export default class MainPanel extends Component<MainPanelProps, null> {
    private translationValue: Animated.Value
    private animatedStyle: RX.Types.AnimatedTextStyleRuleSet

    constructor() {
        super()

        this.translationValue = new Animated.Value(-100)
        this.animatedStyle = Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this.translationValue,
                },
            ],
        })
    }

    componentDidMount() {
        let animation = Animated.timing(this.translationValue, {
            toValue: 0,
            easing: Animated.Easing.OutBack(),
            duration: 500,
        })

        animation.start()
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Animated.Text style={[styles.helloWorld, this.animatedStyle]}>Hello World</Animated.Text>
                    <Text style={styles.welcome}>
                        Welcome to ReactXP
                    </Text>
                    <Text style={styles.instructions}>
                        Edit App.tsx to get started
                    </Text>
                    <Link style={styles.docLink} url={'https://microsoft.github.io/reactxp/docs'}>
                        View ReactXP documentation
                    </Link>

                    <Button style={styles.roundButton} onPress={this.onPressNavigate}>
                        <Text style={styles.buttonText}>
                            See More Examples
                        </Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }

    private onPressNavigate = () => this.props.onPressNavigate()
}