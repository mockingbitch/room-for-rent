import { Button, StyleSheet, Pressable, Text } from 'react-native';

const Top = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <>
            <Button
            title="Go to Dashboard"
            onPress={() =>
                navigation.navigate('Dashboard')
            }
            />
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Test</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    buttonTop: {
        backgroundColor: '#fff000',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginHorizontal: 100,
        marginVertical: 100,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Top