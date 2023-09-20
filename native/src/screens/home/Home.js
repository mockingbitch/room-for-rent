import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = (props) => {
    return (
        <View style={styles.container}>
             We have { props.screenProps.currentFriend.length } friends!
            <Button
            title="Add some friends"
            onPress={() =>
                props.navigation.navigate('Friends')
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home