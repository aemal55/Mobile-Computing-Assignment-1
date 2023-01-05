import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import colors from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setSavedItems } from "../store/savedItemsSlice";

export default TranslationResult = props => {
    const dispatch = useDispatch();

    const { itemId } = props;
    const item = useSelector(state => {
        return state.history.items.find(item => item.id === itemId) ||
            state.savedItems.items.find(item => item.id === itemId)
    });
    const savedItems = useSelector(state => state.savedItems.items);

    const isSaved = savedItems.some(i => i.id === itemId);
    const heartIcon = isSaved ? "heart" : "heart-outlined";

    const heartItem = useCallback(async () => {
        let newSavedItems;

        if (isSaved) {
            newSavedItems = savedItems.filter(i => i.id !== itemId);
        }
        else {
            newSavedItems = savedItems.slice();
            newSavedItems.push(item);
        }

        

        dispatch(setSavedItems({ items: newSavedItems }));
    }, [dispatch, savedItems]);

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