import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    elevation: 4,
    paddingBottom: 10,
    width: width * 0.9,
    marginTop: 10,
    borderRadius: 5
  },
  txtNome: {
    marginTop: 5,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  viewCampos: {
    flexDirection: "row",
  },
  txtCampos: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold'
  },

  txtDados: {
    fontSize: 18
  }

})

export default styles;