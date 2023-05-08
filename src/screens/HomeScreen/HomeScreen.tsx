import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS_DARK } from '../../assets/Colors';
import FontSize from '../../assets/FontSize';

const HomeScreen = () => {
  const [firstNumber, setfirstNumber] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS_DARK.screenColor,
      }}>
      <View
        style={{
          backgroundColor: COLORS_DARK.componentsColor,
          padding: 15,
          marginHorizontal: 15,
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          activeOpacity={0.89}
          onPress={() => {}}></TouchableOpacity>
        <Text
          style={{
            color: COLORS_DARK.textColor,
            fontSize: FontSize.fontBigMedium2,
          }}>
          $ {firstNumber}
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
