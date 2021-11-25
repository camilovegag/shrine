import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Box, Center, CircularProgress, Flex } from "native-base";
import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }
  onPress = () => this.carousel.snapToItem(3);
  onPressPrev = () => this.carousel.snapToItem(0);
  _renderItem({ item, index }) {
    return (
      <Center>
        <CircularProgress
          value={item.value}
          size={77}
          thickness={5}
          _text={{ fontSize: "28" }}
        >
          {item.value + "%"}
        </CircularProgress>
        <Text style={{ padding: 10, fontSize: 20 }}>{item.name}</Text>
      </Center>
    );
  }
  render() {
    let w = this.props.val.slice(0, 6);
    return (
      <Flex flex={1}>
        <Flex direction="row" flex={1} justify="center">
          <TouchableOpacity
            onPress={this.onPressPrev}
            style={{ justifyContent: "center", paddingLeft: 12 }}
          >
            <Text style={{ fontWeight: "bold" }}>←</Text>
          </TouchableOpacity>
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={w}
            sliderWidth={Dimensions.get("window").width * 0.1}
            itemWidth={Dimensions.get("window").width * 0.3}
            renderItem={this._renderItem}
            scrollEnabled={false}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
          <TouchableOpacity
            onPress={this.onPress}
            style={{ justifyContent: "center", paddingRight: 12 }}
          >
            <Text style={{ fontWeight: "bold" }}>→</Text>
          </TouchableOpacity>
        </Flex>
      </Flex>
    );
  }
}
