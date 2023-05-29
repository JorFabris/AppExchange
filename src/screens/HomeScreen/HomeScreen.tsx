import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS_DARK } from '../../assets/Colors';
import FontSize from '../../assets/FontSize';
import Keyboard from '../../components/Keyboard/Keyboard';
import Header from '../../components/Header/Header';
import Fonts from '../../assets/Fonts';
import useHome from './hooks/useHome';
import { getText } from '../../i18n/manageLocales';
import { Enumi18n } from '../../i18n/Interfacei18n';

const HomeScreen = () => {
  const { formatter, addNumber, deleteNumber, fNumber, sNumber } = useHome();

  return (
    <>
      <Header
        backgroundColor={COLORS_DARK.componentsColor}
        title={
          <Text
            style={{
              color: COLORS_DARK.textColor,
              fontFamily: Fonts.BOLD,
              fontSize: FontSize.fontTitle,
            }}>
            {getText(Enumi18n.EN).tabs.home.title}
          </Text>
        }
      />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS_DARK.screenColor,
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              backgroundColor: COLORS_DARK.componentsColor,
              padding: 15,
              marginHorizontal: 15,
              marginVertical: 10,
            }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity activeOpacity={0.89} onPress={() => {}}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    backgroundColor: COLORS_DARK.white,
                  }}></View>
              </TouchableOpacity>
              <Text
                style={{
                  color: COLORS_DARK.textColor,
                  fontSize: FontSize.fontBigMedium2,
                  alignSelf: 'center',
                }}>
                $ {formatter.format(fNumber)}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: COLORS_DARK.componentsColor,
              padding: 15,
              marginHorizontal: 15,
              marginVertical: 10,
            }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity activeOpacity={0.89} onPress={() => {}}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    backgroundColor: COLORS_DARK.white,
                  }}></View>
              </TouchableOpacity>
              <Text
                style={{
                  color: COLORS_DARK.textColor,
                  fontSize: FontSize.fontBigMedium2,
                  alignSelf: 'center',
                }}>
                $ {formatter.format(sNumber)}
              </Text>
            </View>
          </View>
        </View>
        <Keyboard
          onDelete={deleteNumber}
          onPressKey={(val: number) => addNumber(val)}
        />
      </View>
    </>
  );
};

export default HomeScreen;
