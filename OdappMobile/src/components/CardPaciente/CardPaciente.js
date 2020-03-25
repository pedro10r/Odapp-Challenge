import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default function CardPaciente(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtNome}>{props.nome}</Text>
      <View style={styles.viewCampos}>
        <Text style={styles.txtCampos}>Idade: </Text>
        <Text style={styles.txtDados}>{props.idade}</Text>
      </View>
      <View style={styles.viewCampos}>
        <Text style={styles.txtCampos}>Cidade: </Text>
        <Text style={styles.txtDados}>{props.cidade}</Text>
      </View>
      <View style={styles.viewCampos}>
        <Text style={styles.txtCampos}>Estado: </Text>
        <Text style={styles.txtDados}>{props.estado}</Text>
      </View>
    </View>
  );
}
