import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../slice/productSlice";
import { FlatList, TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

export default function Screen2({ navigation }) {
  const dispatch = useDispatch();
  const { filteredProducts, filterType } = useSelector((state) => state.product);

  const handleFilter = (type) => {
    dispatch(filterProducts(type));
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {["All", "RB", "MT"].map((type) => (
          <TouchableOpacity key={type} onPress={() => handleFilter(type)} style={styles.btn}>
            <Text style={[styles.btnText, filterType === type && styles.activeText]}>
              {type === "All" ? "All" : type === "RB" ? "Roadbike" : "Mountain"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
          data={Array.isArray(filteredProducts) ? filteredProducts : []} // Đảm bảo filteredProducts là mảng
          numColumns={2}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Screen3", item)} style={styles.itemContainer}>
          <Image source={item.img} style={styles.itemImage} resizeMode="contain" />
          <Text>{item.name}</Text>
          <Text>$ {item.price}</Text>
          </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id.toString()}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 10,
  },
  btn: {
    width: 100,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(233, 65, 65, 0.53)",
    borderRadius: 5,
  },
  btnText: {
    color: "rgba(190, 182, 182, 1)",
  },
  activeText: {
    color: "rgba(233, 65, 65, 1)",
  },
  itemContainer: {
    width: 160,
    height: 200,
    backgroundColor: "rgba(247, 186, 131, 0.15)",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
});
