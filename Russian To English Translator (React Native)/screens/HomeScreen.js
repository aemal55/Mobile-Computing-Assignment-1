import { Button, ProgressViewIOSComponent, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { AntDesign,Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';
import { useState } from 'react';

export default function HomeScreen() {
  const [enteredText, setEnteredText] = useState("");

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

      <View style={styles.inputContainer}>
          <TextInput 
              multiline
              placeholder='Enter your text here'
              style={styles.TextInput}
              onChangeText={(text) => setEnteredText(text)}
       /> 
       
       <TouchableOpacity>
           disabled={enteredText === ""}
           style={styles.iconContainer}
           <Ionicons 
           name="arrow-redo-circle-sharp" 
           size={24} 
           color={enteredText !=="" ? colors.primary : colors.primaryDisabled} />
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
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1
  },
  TextInput: {
   flex: 1,
   marginTop: 10,
   paddingHorizontal: 20,
   paddingVertical: 15,
   fontFamily: 'regular',
   letterSpacing: 0.3,
   height: 90,
   color: colors.textColor
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'

  }
});
