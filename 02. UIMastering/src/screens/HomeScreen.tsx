import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MediationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          color: "#1D150F",
          fontSize: s(20),
          fontWeight: "semibold",
          marginBottom: vs(6)
        }}
      >
        Meditations
      </Text>
      
      <Text
      style={{
        color:"#2C2016",
        fontSize: s(14),
        marginBottom: vs(16)
      }}
      >
        Lorem Ipsum is simply dummy text
      </Text>

      <TopTabs />

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MediationCard imageUrl={item.imageUrl} title={item.title} date={item.date} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginTop: vs(16) }}
        contentContainerStyle={{ paddingBottom: vs(150), paddingTop: vs(16) }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
