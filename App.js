import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const fruits = [
    { key: "Apple" },
    { key: "Banana" },
    { key: "Orange" },
    { key: "Mango" },
    { key: "Grapes" },
    { key: "Pineapple" },
  ];
  return (
    <ScrollView style={styles.container}>
      {/* View */}
      <View style={styles.header}>
        <Text style={styles.title}>React Native Komponen Dasar</Text>
      </View>
      {/* Image */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />
      {/* Text */}
      <Text style={styles.text}>
        Halo, selamat datang di aplikasi React Native menggunakan Expo!
      </Text>
      {/* TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama Anda"
        value={name}
        onChangeText={setName}
      />
      {/* Button */}
      <Button
        title="Tampilkan Pesan"
        onPress={() =>
          setMessage(`Halo ${name}, selamat belajar React Native!`)
        }
      />
      {/* Text untuk menampilkan pesan */}
      {message ? <Text style={styles.message}>{message}</Text> : null}
      {/* FlatList */}
      <Text style={styles.subtitle}>Daftar Buah:</Text>
      <FlatList
        data={fruits}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>🍎 {item.key}</Text>
        )}
      />
      {/* TouchableOpacity */}
      <TouchableOpacity
        style={styles.buttonCustom}
        onPress={() => alert("Tombol Custom ditekan!")}>
        <Text style={styles.buttonText}>Tombol Custom</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 15,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
  },
  buttonCustom: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "green",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
