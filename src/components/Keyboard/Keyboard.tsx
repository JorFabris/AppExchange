import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS_DARK } from '../../assets/Colors';
import Fonts from '../../assets/Fonts';
import FontSize from '../../assets/FontSize';
type TypeKeyboard = {
  onPressKey: Function;
  onDelete: Function;
};
const Keyboard = ({ onPressKey, onDelete }: TypeKeyboard) => {
  const styles = StyleSheet.create({
    keyboard: {
      backgroundColor: COLORS_DARK.componentsColor,
      padding: 5,
    },
    buttons: {
      height: 40,
      backgroundColor: COLORS_DARK.mainColor,
      flex: 1,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    textButtons: {
      fontFamily: Fonts.REGULAR,
      fontSize: FontSize.fontBigMedium,
      color: COLORS_DARK.textColor,
    },
  });

  return (
    <View style={styles.keyboard}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => onPressKey(1)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressKey(2)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressKey(3)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => onPressKey(4)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressKey(5)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressKey(6)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => onPressKey(7)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressKey(8)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressKey(9)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.buttons, { backgroundColor: 'transparent' }]}>
            <Text style={styles.textButtons}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressKey(0)}
            style={styles.buttons}>
            <Text style={styles.textButtons}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete()} style={styles.buttons}>
            <Text style={styles.textButtons}>DEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Keyboard;
