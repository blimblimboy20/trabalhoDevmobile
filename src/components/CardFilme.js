import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl ="https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get("window").width*0.9;

const MAX_HEIGHT =Dimensions.get("window").height*1;

export default function CardFilme({ filme }){
    return(
        <View  style={styles.conatiner}> 
            <Image  style={styles.image} source={{ uri: baseUrl + filme.poster.data.attributes.url}} />
            <Text  style={styles.titulo}> {filme.titulo}</Text>
            <Text  style={styles.sinopse}> {filme.sinopse}</Text>
            <TouchableOpacity  style={styles.button}>
                <Text  style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: 'red',
        margin: 15,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        height: MAX_HEIGHT,
        width: MAX_WIDTH,


    },

    image:{
        height:"200px",
        width:"150px",
        resizeMode: 'cover'

    },

    titulo:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:10

    },
    sinopse:{
        fontSize:20

    },
    button:{
        height:50,
        width:"100%",
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",

    },
    btnText:{
        fontSize:20,
        fontWeight:"bold"

    }


})