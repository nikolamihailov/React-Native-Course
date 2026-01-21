import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PayMethodCard from "../components/PayMethodCard";
import PaymentList from "../components/PaymentList";
import AddButton from "../components/AddButton";
import BankCardBox from "../components/BankCardBox";

const PaymentScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: vs(50) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
          paddingHorizontal: s(16),
        }}
      >
        <BackButton />
        <Text
          style={{
            fontSize: s(17),
            color: "#181C2E",
            marginStart: s(12),
          }}
        >
          Payment
        </Text>
      </View>

      <PaymentList />

      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <AddButton />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
