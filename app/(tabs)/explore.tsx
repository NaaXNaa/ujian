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
              Foodies adalah solusi praktis bagi para pencinta kuliner yang
              ingin menjelajahi dunia makanan dengan cara yang lebih mudah,
              menyenangkan, dan informatif.
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
});

export default ProfileAndSettingsScreen;
