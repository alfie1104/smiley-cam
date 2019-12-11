import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Camera } from "expo";
import * as Permissions from "expo-permissions";

export default class App extends React.Component {
  state = {
    hasPermission: null
  };

  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "granted") {
      this.setState({ hasPermission: true });
    } else {
      this.setState({ hasPermission: false });
    }
  };

  render() {
    const { hasPermission } = this.state;
    if (hasPermission) {
      return (
        <View>
          <Text>Has Permissions</Text>
        </View>
      );
    } else if (hasPermission === false)
      return (
        <View>
          <Text>Don't have Permissions for this</Text>
        </View>
      );

    return <ActivityIndicator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
