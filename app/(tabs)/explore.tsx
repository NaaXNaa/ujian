import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "@react-navigation/native";

const ProfileAndSettingsScreen: React.FC = () => {
  const user = {
    name: "anfinImut",
    email: "anfinanakbaik@gmail.com",
    profileImage:
      "https://i.pinimg.com/736x/82/be/d4/82bed479344270067e3d2171379949b3.jpg",
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.settingContainer}>
          <ThemedView style={styles.deskripsiText}>
            <ThemedText style={styles.deskripsi}>
              Food adalah solusi praktis bagi para pencinta kuliner yang ingin
              menjelajahi dunia makanan dengan cara yang lebih mudah,
              menyenangkan, dan informatif.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.fiturDeskripsiContainer}>
            <ThemedText style={styles.fiturTitle}>Fitur Aplikasi:</ThemedText>
            <ThemedText style={styles.fiturDeskripsi}>
              1. Memiliki SearchBar yang dapat digunakan untuk mencari atau
              menemukan makanan/minuman yang dicari
            </ThemedText>
            <ThemedText style={styles.fiturDeskripsi}>
              2. Memiliki fitur filter yang dapat digunakan untuk memilah antara
              makanan ataupun minuman
            </ThemedText>
            <ThemedText style={styles.fiturDeskripsi}>
              3. Mendapatkan rekomendasi makanan berdasarkan preferensi Anda.
            </ThemedText>
          </ThemedView>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#ABBA7C",
  },
  profileInfo: {
    alignItems: "center",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ABBA7C",
  },
  profileEmail: {
    fontSize: 16,
    color: "#aaa",
  },
  settingItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  settingContainer: {
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  deskripsiText: {
    backgroundColor: "#333",
  },
  deskripsi: {
    fontSize: 15,
    color: "#fff",
  },
  // New styles for fitur Deskripsi
  fiturDeskripsiContainer: {
    backgroundColor: "#333",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  fiturTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ABBA7C",
    marginBottom: 10,
  },
  fiturDeskripsi: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
});

export default ProfileAndSettingsScreen;
