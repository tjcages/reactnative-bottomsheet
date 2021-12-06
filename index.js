import React from "react";
import { View, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BottomSheet = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={props.onPress}
        underlayColor={"transparent"}
        activeOpacity={1}
      >
        <View />
      </TouchableHighlight>

      <SafeAreaView edges={["bottom"]} style={props.style}>
        {props.children}
      </SafeAreaView>
    </View>
  );
};

export default BottomSheet;
