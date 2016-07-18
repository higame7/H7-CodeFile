import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { extendRawIcon } from './raw';

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class IconWithBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: false
    };
  }

  onPress() {
    const { tabName, gotoTab } = this.context;
    gotoTab(tabName);
  }

  tabDidActive() {
    this.setState({ selected: true });
    //console.log(`tab ${this.context.tabName} is active`);
  }

  tabDidInactive() {
    this.setState({ selected: false });
    //console.log(`tab ${this.context.tabName} is inactive`);
  }

  render() {
    const {
      label,
      type,
      ontype,
      from,
      size,
      iconStyle,
      onActiveColor,
      onInactiveColor,
      onActiveColorBar,
      onInactiveColorBar
    } = this.props;
    const { selected } = this.state;

    const color = selected? onActiveColor : onInactiveColor
    const barColor = onInactiveColorBar;
    const types = selected? ontype : type;
    const borderWidth = 1;
    const padding = 5;

    let icon = null;
    if (!!types && !from) {
      throw new Error("icon must contains 'type' and 'from' values");
    } else if (!types && !!from) {
      throw new Error("icon must contains 'type' and 'from' values");
    } else if (!!types && !!from) {
      icon = (
        <Text style={[iconStyle, { fontSize: size, fontFamily: from, color: color }]}>
          {types}
        </Text>
      );
    }

    return (
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={this.onPress.bind(this)}>
        <View style={[styles.icon, { borderTopWidth: borderWidth, borderTopColor: barColor, paddingTop: padding }]}>
          {icon}
          <View style={{ paddingTop: 1 }}>
            <Text style={{ fontSize: 12, color: color }}>{label}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

IconWithBar.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  from: React.PropTypes.string,
  size: React.PropTypes.number,
  iconStyle: React.PropTypes.any,
  onActiveColor: React.PropTypes.string,
  onInactiveColor: React.PropTypes.string,
  onActiveColorBar: React.PropTypes.string,
  onInactiveColorBar: React.PropTypes.string
};

IconWithBar.defaultProps = {
  size: 30,
  onActiveColor: 'white',
  onInactiveColor: 'black',
  onActiveColorBar: 'red',
  onInactiveColorBar: 'gray'
};

IconWithBar.contextTypes = {
  tabName: React.PropTypes.string,
  gotoTab: React.PropTypes.func
};

export default extendRawIcon(IconWithBar);
