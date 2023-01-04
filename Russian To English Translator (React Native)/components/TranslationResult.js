import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import colors from "../utils/colors";
import { useSelector } from "react-redux";

export default TranslationResult = props => {

    const { itemId } = props;
    const item = useSelector(state => state.history.items.find(item => item.id === itemId));

    return <View style={styles.container}>

    <View style={styles.textContainer}>
            <Text
                numberOfLines={4}
                style={styles.title}>{item.original_text}</Text>
            <Text
                numberOfLines={4}
                style={styles.subTitle}>{item.translated_text[item.to]}</Text>
        </View>

        <TouchableOpacity
            onPress={heartItem}
            style={styles.iconContainer}>
            <AntDesign name="heart" size={24} color={'red'} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        borderColor: colors.lightGrey,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderTopWidth: 0
    },
    textContainer: {
        flex: 1,
        marginRight: 8
    },
    title: {
        fontFamily: 'medium',
        letterSpacing: 0.3,
        color: colors.textColor
    },
    subTitle: {
        fontFamily: 'regular',
        letterSpacing: 0.3,
        color: colors.subTextColor,
        fontSize: 13
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }

})