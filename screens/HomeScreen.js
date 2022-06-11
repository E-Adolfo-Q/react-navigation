import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (  
        <View>
            <Text
              style={{
                 fontSize:30,
                 textAlign:"center",
                 marginTop:"20%" 
              }}
            >
                Home Screen
            </Text>
            <TouchableOpacity
              style={{
                 backgroundColor:'purple',
                 padding : 10,
                 marginTop:"20%",
                 width: "50%",
                 alignSelf:"center",
                 borderRadius:10
              }}
              onPress={() => navigation.navigate("Stack")}
            >
                <Text
                 style={{
                     fontSize:15,
                     textAlign:"center",
                     color:"white"
                 }}
                >
                    Go to Stack Screen
                </Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default HomeScreen;