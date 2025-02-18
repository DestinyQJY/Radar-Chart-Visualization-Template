import { StyleSheet, Text, Pressable } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function UserListItem({ gender, text, onPress }) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <FontAwesome name="user" size={24} color={gender === 'male' ? "#007AFF" : "#FF69B4"} />
            <Text style={styles.text}>{text}</Text>
            <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F7',
    },
    text: {
        flex: 1,
        fontSize: 17,
        marginLeft: 12,
        color: '#000',
    },
});