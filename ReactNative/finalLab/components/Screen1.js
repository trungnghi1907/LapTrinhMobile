import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Screen1({ navigation }) {
  // Access introText and shopName from the Redux store
  const introText = useSelector((state) => state.product.introText);
  const shopName = useSelector((state) => state.product.shopName);

  return (
    <View style={styles.container}>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>{introText}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/bifour_-removebg-preview.png")}
          style={styles.mainImage}
        />
      </View>
      <View>
        <Text style={styles.shopTitle}>{shopName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen2")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  introContainer: {
    width: 351,
    height: 87,
  },
  introText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "400",
    fontFamily: "VT323",
  },
  imageContainer: {
    width: 359,
    height: 388,
    backgroundColor: "rgba(233, 65, 65, 0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: 292,
    height: 270,
  },
  shopTitle: {
    fontSize: 26,
    fontWeight: "700",
    width: 200,
    textAlign: "center",
  },
  button: {
    width: 340,
    height: 61,
    backgroundColor: "red",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "400",
    fontFamily: "VT323",
  },
});
