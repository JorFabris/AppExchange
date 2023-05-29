import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, StatusBar, View, StatusBarStyle } from 'react-native';
import { COLORS_DARK } from '../../assets/Colors';

interface IProps {
  title?: any;
  actions?: any;
  startSlot?: any;
  backgroundColor?: string;
  endSlot?: any;
}

const Header = ({ title, backgroundColor, endSlot, startSlot }: IProps) => {
  const styles = StyleSheet.create({
    statusBar: {
      height: 45,
    },
    header: {
      width: '100%',
      height: 55,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iosShadows: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },

    backButton: {
      position: 'absolute',
      left: 10,
    },

    badge: {
      width: 22,
      height: 22,
      backgroundColor: COLORS_DARK.mainColor,
      borderRadius: 100,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      right: -8,
      top: -12,
      position: 'absolute',
      zIndex: 1000,
    },
  });

  return (
    <>
      <View
        style={[
          styles.statusBar,
          { backgroundColor: COLORS_DARK.componentsColor },
        ]}>
        <StatusBar
          translucent
          barStyle={COLORS_DARK.statusBar as StatusBarStyle}
          backgroundColor={COLORS_DARK.componentsColor}
        />
      </View>
      <SafeAreaView>
        <View style={[styles.header, { backgroundColor }]}>
          {startSlot && startSlot}
          {title}
          {endSlot && endSlot}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor:
              'DARK' === 'DARK'
                ? COLORS_DARK.componentsColor
                : 'rgba(0, 0, 0, 0.03)',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2.84,

            elevation: 1,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Header;
