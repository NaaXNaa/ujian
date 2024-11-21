import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

// Data makanan, bisa disimpan di luar file ini atau di API
const foodData = [
  {
    id: "1",
    title: "Pizza",
    description: `Pizza keju yang lezat, dengan lapisan keju mozzarella yang meleleh di atas roti pizza yang renyah, berpadu dengan saus tomat segar yang memberikan rasa asam manis yang pas. Setiap gigitan menghadirkan kenikmatan rasa gurih, creamy, dan kehangatan dari topping yang terpanggang sempurna.
`,
    imageUrl:
      "https://i.pinimg.com/736x/a5/7b/50/a57b5068f66f901aa3796dc8553f8c33.jpg",
  },
  {
    id: "2",
    title: "Burger",
    description: `Burger daging sapi yang juicy, dengan roti empuk yang diselimuti oleh sayuran segar seperti selada, tomat, dan bawang, serta keju leleh di tengahnya. Dilengkapi dengan saus spesial yang memberikan rasa gurih dan sedikit manis, membuatnya jadi hidangan yang memanjakan lidah.
`,
    imageUrl:
      "https://i.pinimg.com/736x/cd/a2/b0/cda2b0fdd05701873fe8c9b1fad7039f.jpg",
  },
  {
    id: "3",
    title: "Sushi",
    description: `Sushi yang terbuat dari ikan salmon segar, dipadukan dengan nasi yang lembut dan dibungkus dengan rumput laut (nori). Ditambah dengan sedikit wasabi untuk memberikan sensasi pedas yang menyegarkan di setiap gigitan. Keasaman cuka beras yang digunakan dalam nasi menambah rasa unik yang khas.
`,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbotFKVHOQe1yDq5pyknWT0zdB4TTkpxpXcg&s",
    category: "Food",
  },
  {
    id: "4",
    title: "Pasta",
    description: `Pasta Italia dengan saus krim kental yang gurih, disajikan dengan taburan keju parmesan yang meleleh di atasnya. Tekstur pasta yang kenyal berpadu sempurna dengan saus yang creamy dan kaya rasa, menciptakan pengalaman makan yang memuaskan.
`,
    imageUrl:
      "https://i.pinimg.com/236x/45/48/76/4548764dc2f27f84bb83bddb60a83140.jpg",
    category: "Food",
  },
  {
    id: "5",
    title: "Salad",
    description: `Salad hijau yang segar dengan berbagai jenis sayuran seperti selada, tomat, mentimun, dan wortel, disajikan dengan dressing ringan yang memberi rasa asam dan manis. Sebagai pilihan sehat, salad ini memberikan kesegaran di setiap gigitan.
`,
    imageUrl:
      "https://i.pinimg.com/236x/07/61/0b/07610bce48e48c4b33ec1a2d99b95c22.jpg",
    category: "Food",
  },
  {
    id: "6",
    title: "Atam Geprek",
    description: `Ayam goreng tepung yang dipenyet dengan sambal pedas yang kaya rasa. Ayam yang renyah di luar dan lembut di dalam berpadu dengan sambal yang pedas menggigit dan sedikit manis, menjadikannya hidangan yang sempurna bagi pecinta masakan pedas.
`,
    imageUrl:
      "https://i.pinimg.com/236x/10/c6/a9/10c6a9ba1e5f4d44e7f9c1e6946f890c.jpg",
    category: "Food",
  },
  {
    id: "7",
    title: "Nasi Goreng",
    description: `Nasi goreng khas Indonesia yang diolah dengan bumbu rempah-rempah yang kaya, seperti kecap manis, bawang merah, dan bawang putih. Biasanya disajikan dengan irisan daging ayam, telur, atau seafood, dan dilengkapi dengan kerupuk sebagai pelengkap yang menambah kelezatan.
`,
    imageUrl:
      "https://i.pinimg.com/236x/85/4f/68/854f6800fb759328529c00516cbdab66.jpg",
    category: "Food",
  },
  {
    id: "8",
    title: "Bakso",
    description: `Bakso adalah bola daging kenyal yang disajikan dalam kuah kaldu yang gurih dan kaya rasa. Bakso ini biasanya ditemani dengan mie kunir, tahu, dan sayuran, memberikan kombinasi rasa yang menyegarkan dan lezat di setiap sendoknya.
`,
    imageUrl:
      "https://i.pinimg.com/236x/37/52/46/375246e70dce784390fe5ec48b9168c7.jpg",
    category: "Food",
  },
  {
    id: "9",
    title: "Rendang",
    description: `Rendang adalah semur daging sapi yang dimasak dengan rempah-rempah khas Minangkabau seperti kunyit, jahe, dan cabai, dimasak dalam santan yang kaya hingga dagingnya menjadi sangat empuk. Hidangan ini kaya rasa, pedas, dan memiliki tekstur yang sangat lembut, sempurna untuk dinikmati bersama nasi.
`,
    imageUrl:
      "https://i.pinimg.com/736x/97/d0/21/97d02196deea630b66f9a2002c8f6ce8.jpg",
    category: "Food",
  },
  {
    id: "11",
    title: "Air Putih",
    description: `Air putih biasa yang menyegarkan, memberikan rasa segar dan dingin saat diminum, sangat cocok untuk melepas dahaga setelah aktivitas atau di cuaca panas. Kesederhanaan air putih memberikan keseimbangan dalam menjaga tubuh tetap terhidrasi.
`,
    imageUrl:
      "https://i.pinimg.com/236x/de/53/9f/de539f721816d425139a00baa0dadc0a.jpg",
    category: "Drink",
  },
  {
    id: "12",
    title: "Es Teh",
    description: `Es teh manis yang dingin, disajikan dengan es batu, memberikan rasa teh yang segar dan manis di setiap tegukan. Es teh adalah pilihan minuman yang sempurna untuk menyegarkan diri, terutama saat cuaca sedang panas.
`,
    imageUrl:
      "https://i.pinimg.com/236x/ef/8f/76/ef8f76582162ec4f2523b7eeee628fc7.jpg",
    category: "Drink",
  },
  {
    id: "13",
    title: "Cappucino",
    description: `Cappuccino adalah kopi espresso yang disajikan dengan busa susu yang lembut dan tebal di atasnya. Rasa pahit dari kopi dipadukan dengan kelembutan susu panas, menciptakan keseimbangan rasa yang harmonis dan sangat cocok untuk dinikmati saat santai.
`,
    imageUrl:
      "https://i.pinimg.com/236x/d3/03/7e/d3037e45f05def4757e9c662191294f0.jpg",
    category: "Drink",
  },
  {
    id: "14",
    title: "Es Campur",
    description: `Es campur adalah campuran berbagai buah-buahan segar yang disiram dengan sirup manis, santan, dan es serut. Hidangan ini sangat menyegarkan, dengan kombinasi rasa manis, gurih, dan dingin yang cocok dinikmati saat cuaca terik.`,
    imageUrl:
      "https://i.pinimg.com/236x/03/14/5b/03145b878a2d20777c21ea5422b1b5e9.jpg",
    category: "Drink",
  },
  {
    id: "15",
    title: "Es Kelapa Muda",
    description: `Es kelapa muda adalah air kelapa segar yang disajikan dengan es batu, memberikan sensasi rasa manis alami yang menyegarkan dan menyehatkan. Minuman ini sangat cocok untuk menghilangkan dahaga dan memberi kesegaran tubuh di cuaca panas.
`,
    imageUrl:
      "https://i.pinimg.com/236x/43/3d/28/433d28c07a9b05f671d3710a90804934.jpg",
    category: "Drink",
  },
  {
    id: "16",
    title: "Soda Gembira",
    description: `Soda gembira adalah campuran soda manis dengan susu kental manis, menghasilkan rasa yang unik dan manis. Dengan gelembung soda yang menyegarkan dan kelembutan susu, minuman ini adalah pilihan yang menyenangkan bagi pecinta rasa manis.
`,
    imageUrl: "",
    category: "Drink",
  },
  {
    id: "17",
    title: "Alpukat Kocok",
    description: `Alpukat kocok adalah milkshake alpukat yang creamy dan manis, terbuat dari alpukat segar yang dicampur dengan susu kental manis dan es batu. Minuman ini sangat kaya rasa dan memberikan kelembutan tekstur yang menenangkan.
`,
    imageUrl:
      "https://i.pinimg.com/236x/c1/45/5b/c1455b871dbca964b495fd6cda02920e.jpg",
    category: "Drink",
  },
  {
    id: "18",
    title: "Kopi",
    description: `Kopi hitam yang kuat dan pahit, sangat cocok bagi pecinta kopi sejati. Dengan rasa yang pekat dan sedikit asam, kopi ini memberikan energi dan kenikmatan bagi mereka yang menikmati sensasi rasa pahit alami dari biji kopi yang diseduh dengan tepat.
`,
    imageUrl:
      "https://i.pinimg.com/236x/18/2e/0e/182e0e8e9a48d7aa756ff0a537f2bfd7.jpg",
    category: "Drink",
  },
  {
    id: "19",
    title: "Es Cao Susu",
    description: `Es cao susu adalah minuman coklat susu dingin yang lezat dan manis. Dengan rasa coklat yang creamy dan rasa susu yang kaya, minuman ini cocok bagi mereka yang ingin menikmati sensasi rasa manis dan kenikmatan coklat di setiap tegukan.
`,
    imageUrl: "",
    category: "Drink",
  },
  {
    id: "20",
    title: "Wedang Jahe",
    description: `Wedang jahe adalah teh jahe hangat dengan rasa pedas khas jahe yang dapat menghangatkan tubuh. Dikenal sebagai minuman tradisional, wedang jahe sering dinikmati saat cuaca dingin atau ketika tubuh membutuhkan kehangatan alami dari rempah-rempah.
`,
    imageUrl:
      "https://i.pinimg.com/236x/ca/d9/cf/cad9cfff8968f74d86cafb753f4f0534.jpg",
    category: "Drink",
  },
];

const DetailsPage = () => {
  const [item, setItem] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mengakses parameter ID menggunakan useLocalSearchParams
  const { id } = useLocalSearchParams(); // Ini menggantikan router.params

  useEffect(() => {
    if (id) {
      // Cari item berdasarkan ID yang diterima dari params
      const foodItem = foodData.find((food) => food.id === id);
      if (foodItem) {
        setItem(foodItem);
      }
      setIsLoading(false); // Data ditemukan, hentikan loading
    }
  }, [id]); // Memanggil ulang jika id berubah

  // Menampilkan loading atau pesan error
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Loading...</Text>
      </View>
    );
  }

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Item not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ABBA7C",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 20,
  },
  errorText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});

export default DetailsPage;
