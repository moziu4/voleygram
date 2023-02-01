import react from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const BottomBar = () => {
    return(
        <View style={style.container}>
            <Text>hola</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:Dimensions.get('screen').width,
        position:'absolute',
        bottom:0,
        elevation:10,
        flexDirection:'row',
        justifyContent:"space-around",
        marginBottom: 0,
        opacity:0.95,
        paddingBottom: 6,
        
       
      

    }
})

export default BottomBar