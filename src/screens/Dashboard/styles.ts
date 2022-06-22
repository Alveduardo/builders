import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topInfoWrapper: {
        flex: 1,
        marginTop: 160,
        justifyContent: 'space-between',
    },
    city: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
    },
    time: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
    },
    temparature: {
        color: '#fff',
        fontFamily: 'Lato-Light',
        fontSize: 85,
    },
    weatherType: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 34,
        marginLeft: 10,
    },
    bottomInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    infoText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
    },
    infoBar: {
        width: 45,
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        overflow: 'hidden'
    },
    indicatorWrapper: {
        position: 'absolute',
        top: 140,
        left: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    normalDot: {
        height: 5,
        width: 5,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: '#fff',
    },
})