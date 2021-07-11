import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  pix: {
    backgroundColor: "#fff",
    borderRadius:15
  },
  pixBorderRadius:{
backgroundColor: "#777"
  },
  pixHeaderMargin: {
    paddingLeft: 20,
    paddingTop: 12,
    maxHeight: 380
  },
  pixHeaderImage: {
    marginTop: 10,
    marginBottom: 6,
    width: "52%",
    maxHeight: "52%",
    resizeMode: 'contain'
  },
  pixHeaderTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginLeft:4,
    marginBottom:4
  },
  pixHeaderDescription: {
    fontFamily:"Roboto-Regular",
    fontSize:19,
    color:"#868686",
    marginLeft:4    
  },
  pixBubbleIcon:{
    backgroundColor: "#f0f1f5",
    padding:22,
    borderRadius:50
  },
  pixBubbleText: {
    textAlign:"center",
    marginTop: 10,
    fontFamily: "Roboto-Bold",
    color: "#232428"
  },
  pixBubbleButtons: {
    marginBottom:40,
  },
  pixLineButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 22,
    backgroundColor:"#f0f1f5"
  },
  pixLineButtonsText:{
    fontFamily:"Roboto-Bold",
    fontSize:17,
    marginLeft: 15,
    alignSelf:"center",
    color: "#232428"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 2,
    width: "90%",
    alignSelf: "center",
    marginBottom: 15
  },
  cardContent: {
    margin: 20,
    //color: "#c0c0c0" => cinza //color: "#29a3e3" => azul //color: "#398159" => verde //color: "#8e28d6" => roxo dos botoes
  },
  cardHeader: {
    marginBottom: 12
  },
  cardTitle: {
    alignSelf: "center",
    marginLeft: 20
  },
  cardDescription: {
    marginBottom: 10,
    color: "#868686"
  },
  cardTextBoldBlue: {
    fontSize: 25,
    color: "#31a8e0",
    fontFamily: "Roboto-Bold"
  },
  cardTextBoldGreen: {
    fontFamily: "Roboto-Bold",
    marginLeft: 6,
    color: "#459567"
  }
  ,
  cardTextStrong: {
    fontFamily: "Roboto-Bold",
    fontSize: 16
  },
  cardTextRegular: {
    fontSize: 17,
    fontFamily: "Roboto-Regular",
    color: "#1a1a1a"
  }
  ,
  cardButton: {
    borderColor: "#830ad1",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "auto",
    alignSelf: "flex-start",
    marginTop: 18,
  },
  cardButtonText:{
    color: "#830ad1",
    fontFamily: "Roboto-Bold",
  },
  fundo: {
    backgroundColor: "#830ad1",
    height: "100%",
    width: "100%"
  },
  ola: {

  },
  nomeHome: {
    fontFamily: "Roboto-Bold",
    color: "#fff",
    fontSize: 25
  },
  logo: {
    width: 50,
    height: 50
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  rowSpaceAround: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  rowSpaceEvenly: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  footerButtonIcon: {
    fontSize: 25
  },
  footerButtonsContent: {
    margin: 8,
    color: "#fff",
    fontSize: 12
  },
  footerButtons: {
    backgroundColor: "#8e28d6",
    borderRadius: 3,
    marginTop: 16,
    marginLeft: 8,
    width: 85,
    height: 95,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  footer: {
    backgroundColor: "#830ad1",
    height: "19%",
    justifyContent: "center",
    width: "100%",
    top: "81%",
    left: 0,
    position: "absolute",
    zIndex: 1
  },
  headerBubbleButton: {
    backgroundColor: "#8e28d6",
    width: 50,
    height:50,
    borderRadius: 100,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  headerButtons: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: "#830ad1",
    height: "15%",
    justifyContent: "center",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 1
  }

});

export default styles;