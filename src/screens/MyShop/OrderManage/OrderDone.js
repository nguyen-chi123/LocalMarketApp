import React from "react";
import {View} from "react-native";
import CommonOrder from "./CommonOrder";

const OrderDone = () => {
  return (
    <CommonOrder isWaiting={false} />
  );
}

export default OrderDone
