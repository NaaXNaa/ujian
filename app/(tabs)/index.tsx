import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

const foodData = [
  {
    id: "1",
    title: "Pizza",
    description:
      "Pizza keju yang lezat, dengan lapisan keju yang meleleh di atas roti pizza yang renyah dan saus tomat segar",
    imageUrl:
      "https://i.pinimg.com/736x/a5/7b/50/a57b5068f66f901aa3796dc8553f8c33.jpg",
    category: "Food",
  },
  {
    id: "2",
    title: "Burger",
    description:
      "Burger daging sapi yang juicy, dipadukan dengan roti lembut dan sayuran segar",
    imageUrl:
      "https://i.pinimg.com/736x/cd/a2/b0/cda2b0fdd05701873fe8c9b1fad7039f.jpg",
    category: "Food",
  },
  {
    id: "3",
    title: "Sushi",
    description:
      "Sushi salmon segar dengan nasi yang lembut dan sedikit wasabi untuk sensasi rasa pedas yang menyegarkan",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbotFKVHOQe1yDq5pyknWT0zdB4TTkpxpXcg&s",
    category: "Food",
  },
  {
    id: "4",
    title: "Pasta",
    description:
      "Pasta Italia dengan saus krim kental yang gurih dan taburan keju parmesan",
    imageUrl:
      "https://i.pinimg.com/236x/45/48/76/4548764dc2f27f84bb83bddb60a83140.jpg",
    category: "Food",
  },
  {
    id: "5",
    title: "Salad",
    description:
      "Salad hijau yang sehat, penuh dengan sayuran segar dan dressing ringan",
    imageUrl:
      "https://i.pinimg.com/236x/07/61/0b/07610bce48e48c4b33ec1a2d99b95c22.jpg",
    category: "Food",
  },
  {
    id: "6",
    title: "Atam Geprek",
    description:
      "Ayam goreng pedas dengan sambal yang menyengat, cocok bagi pecinta rasa pedas",
    imageUrl:
      "https://i.pinimg.com/236x/10/c6/a9/10c6a9ba1e5f4d44e7f9c1e6946f890c.jpg",
    category: "Food",
  },
  {
    id: "7",
    title: "Nasi Goreng",
    description:
      "Nasi goreng khas Indonesia dengan bumbu rempah yang kaya dan irisan daging ayam atau seafood",
    imageUrl:
      "https://i.pinimg.com/236x/85/4f/68/854f6800fb759328529c00516cbdab66.jpg",
    category: "Food",
  },
  {
    id: "8",
    title: "Bakso",
    description:
      "Sup bakso yang kaya rasa, dengan bola daging yang kenyal dan kuah yang gurih",
    imageUrl:
      "https://i.pinimg.com/236x/37/52/46/375246e70dce784390fe5ec48b9168c7.jpg",
    category: "Food",
  },
  {
    id: "9",
    title: "Rendang",
    description:
      "Semur daging sapi pedas dengan rempah-rempah khas Minangkabau, dimasak hingga empuk dan kaya rasa",
    imageUrl:
      "https://i.pinimg.com/736x/97/d0/21/97d02196deea630b66f9a2002c8f6ce8.jpg",
    category: "Food",
  },
  {
    id: "10",
    title: "Nasi Kuning",
    description:
      "Nasi kuning yang aromatik, disajikan dengan lauk pauk seperti ayam goreng, sambal, dan telur",
    imageUrl:
      "https://i.pinimg.com/236x/e9/89/4d/e9894d428e3b95eb48481df47cd461d6.jpg",
    category: "Food",
  },
  {
    id: "11",
    title: "Air Putih",
    description: "Air putih biasa yang menyegarkan, cocok untuk melepas dahaga",
    imageUrl:
      "https://i.pinimg.com/236x/de/53/9f/de539f721816d425139a00baa0dadc0a.jpg",
    category: "Drink",
  },
  {
    id: "12",
    title: "Es Teh",
    description:
      "Teh manis dingin yang menyegarkan, cocok dinikmati saat cuaca panas",
    imageUrl:
      "https://i.pinimg.com/236x/ef/8f/76/ef8f76582162ec4f2523b7eeee628fc7.jpg",
    category: "Drink",
  },
  {
    id: "13",
    title: "Cappucino",
    description: "",
    imageUrl:
      "https://i.pinimg.com/236x/d3/03/7e/d3037e45f05def4757e9c662191294f0.jpg",
    category: "Drink",
  },
  {
    id: "14",
    title: "Es Campur",
    description:
      "Buah campur es dengan sirup manis, santan, dan es serut yang menyegarkan",
    imageUrl:
      "https://i.pinimg.com/236x/03/14/5b/03145b878a2d20777c21ea5422b1b5e9.jpg",
    category: "Drink",
  },
  {
    id: "15",
    title: "Es Kelapa Muda",
    description:
      "Air kelapa muda dingin yang menyegarkan, cocok untuk menghilangkan dahaga di cuaca panas",
    imageUrl:
      "https://i.pinimg.com/236x/43/3d/28/433d28c07a9b05f671d3710a90804934.jpg",
    category: "Drink",
  },
  {
    id: "16",
    title: "Soda Gembira",
    description:
      "Soda dengan susu manis yang memberikan sensasi rasa yang unik dan menyegarkan",
    imageUrl: "",
    category: "Drink",
  },
  {
    id: "17",
    title: "Alpukat Kocok",
    description:
      "Es Alpukat Milkshake yang creamy dan manis, terbuat dari alpukat segar dan susu kental manis",
    imageUrl:
      "https://i.pinimg.com/236x/c1/45/5b/c1455b871dbca964b495fd6cda02920e.jpg",
    category: "Drink",
  },
  {
    id: "18",
    title: "Kopi",
    description:
      "Kopi hitam yang kuat dan pahit, cocok bagi pecinta kopi sejati",
    imageUrl:
      "https://i.pinimg.com/236x/18/2e/0e/182e0e8e9a48d7aa756ff0a537f2bfd7.jpg",
    category: "Drink",
  },
  {
    id: "19",
    title: "Es Cao Susu",
    description:
      "Coklat susu dingin yang manis dan lezat, memberikan rasa yang kaya dan creamy",
    imageUrl: "",
    category: "Drink",
  },
  {
    id: "20",
    title: "Wedang Jahe",
    description:
      "Teh jahe yang hangat dengan rasa pedas khas jahe, cocok untuk menghangatkan badan",
    imageUrl:
      "https://i.pinimg.com/236x/ca/d9/cf/cad9cfff8968f74d86cafb753f4f0534.jpg",
    category: "Drink",
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState(""); //untuk menyimpan teks pencarian
  const handleSearchChange = (text: string) => setSearchQuery(text); //kalo ada perubahan pada string/input search nya akan mengubah hasil pencarian juga
  const [filter, setFilter] = useState("All");
  const router = useRouter();

  const handleFilterChange = (newFilter: string) => setFilter(newFilter);

  const renderFoodCard = ({ item }: { item: any }) => (
    <View style={styles.card}>
      {item.imageUrl ? (
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      ) : null}
      <ThemedText style={styles.cardTitle}>{item.title}</ThemedText>
      <ThemedText style={styles.cardDescription}>{item.description}</ThemedText>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => handleDetailsClick(item.id)} // Pass item.id to navigate
      >
        <ThemedText style={styles.cardButtonText}>Details</ThemedText>
      </TouchableOpacity>
    </View>
  );

  const filterFoodData = foodData
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) => filter === "All" || item.category === filter);

  const handleDetailsClick = (id: string) => {
    router.push(`/details/${id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.searchContainer}>
        <ThemedText style={styles.title}>Hi Foodies!</ThemedText>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari Makananmu.."
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholderTextColor="#aaa"
        />
      </ThemedView>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => handleFilterChange("All")}
        >
          <ThemedText style={styles.filterButtonText}>All</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => handleFilterChange("Food")}
        >
          <ThemedText style={styles.filterButtonText}>Food</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => handleFilterChange("Drink")}
        >
          <ThemedText style={styles.filterButtonText}>Drink</ThemedText>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filterFoodData}
        renderItem={renderFoodCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  searchContainer: {
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ABBA7C",
    marginVertical: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#333",
    color: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#3D5300",
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  cardList: {
    marginTop: 20,
  },
  card: {
    backgroundColor: "#333",
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#444",
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ABBA7C",
  },
  cardDescription: {
    fontSize: 14,
    color: "#aaa",
    marginVertical: 10,
  },
  cardButton: {
    backgroundColor: "#3D5300",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  cardButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
