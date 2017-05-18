import { Platform, Types } from "reactxp";

const MaterialBlue = '#2196f3'
const IosBlue = '#007AFF'

let button: Types.ButtonStyle = {
    margin: 10,
    width: 200,
    alignItems: 'center'
}

let buttonRaised: Types.ButtonStyle = {
    ...button,
    borderRadius: 2
}

let buttonLabel: Types.TextStyle = {
    margin: 10
}

let buttonLabelRaised: Types.TextStyle = {
    ...buttonLabel
}

let buttonLabelFlat: Types.TextStyle = {
    ...buttonLabel
}

if (Platform.getType() === 'ios') {
    buttonRaised.backgroundColor = IosBlue

    buttonLabelFlat.color = IosBlue
} else {
    buttonRaised.backgroundColor = MaterialBlue
    buttonRaised.elevation = 3

    buttonLabel.fontWeight = 'bold'
    buttonLabelFlat.color = MaterialBlue
    buttonLabelRaised.color = '#ffffff'
}

export default {
    button,
    buttonRaised,
    buttonLabel,
    buttonLabelRaised,
    buttonLabelFlat
}