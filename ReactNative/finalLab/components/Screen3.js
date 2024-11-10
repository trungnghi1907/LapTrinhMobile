import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/productSlice";

export default function Screen3({ route, navigation }) {
  const dispatch = useDispatch();

  // Get product details from route params
  const product = route.params;

  const handleAddToCart = () => {
    // Dispatch action to add product to cart
    dispatch(addToCart(product));
    // Navigate back to Screen1 after adding to the cart
    navigation.navigate("Screen1");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product?.img} resizeMode="contain" style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product?.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountText}>{product?.discount}</Text>
          <Text style={styles.priceText}>{product?.price} $</Text>
        </View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{product?.Description}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Image
          source={require("../assets/akar-icons_heart.png")}
          style={styles.heartIcon}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  imageContainer: {
    width: 358,
    height: 388,
    backgroundColor: "rgba(233, 65, 65, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  productImage: {
    width: 297,
    height: 340,
  },
  detailsContainer: {
    width: "100%",
    height: 300,
    justifyContent: "space-around",
  },
  productName: {
    fontSize: 35,
    fontWeight: "400",
    fontFamily: "Voltaire",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  discountText: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "Voltaire",
    color: "rgba(0, 0, 0, 0.59)",
    width: "50%",
  },
  priceText: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "Voltaire",
    width: "50%",
  },
  descriptionTitle: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "Voltaire",
  },
  descriptionText: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "Voltaire",
    color: "rgba(0, 0, 0, 0.57)",
  },
  footerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartIcon: {
    width: 35,
    height: 35,
  },
  addButton: {
    width: 269,
    height: 54,
    backgroundColor: "red",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "Voltaire",
  },
});
