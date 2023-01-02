import { Button, ProgressViewIOSComponent, StyleSheet, Text, Touchable, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.LanguageContainer}>
          <TouchableOpacity>
              styles={styles.LanguageOption}
              onPress={()  => console.log("Pressed")}
              <Text style={styles.LanguageOptionText}>English</Text>
          </TouchableOpacity>

          <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={24} color={colors.lightGrey} />
          </View>

          <TouchableOpacity>
              styles={styles.LanguageOption}
              onPress={()  => console.log("Pressed")}
              <Text style={styles.LanguageOptionText}>Russian</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    LanguageContainer: {
      flexDirection: 'row',
      borderBottomColor: colors.lightGrey,
      borderBottomWidth: 1
    },
    LanguageOption: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15
    },
    arrowContainer: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
  LanguageOptionText: {
    color: colors.primary,
    fontfamily: 'regular',
    letterSpacing: 0.3
  }
});
