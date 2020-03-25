import React, { Component } from 'react';
import api from '../../services/api';
import CardPaciente from '../../components/CardPaciente/CardPaciente';
import styles from './styles';

import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

export default class Main extends Component {

  static navigationOptions = {
    title: 'Lista de Pacientes'
  };

  state = {
    pacienteInfo: {},
    docs: [],
    page: 1,
    totalPage: null
  }

  componentDidMount() {
    this.loadPacientes();
  }

  nextPage = () => {
    const { page, totalPage } = this.state
    if (page + 1 <= totalPage) {
      this.setState({ page: page + 1 }, () => {
        this.loadPacientes()
      })
    }
  }

  backPage = () => {
    const { docs, page } = this.state
    if (docs && page >= 1) {
      this.setState({ page: page - 1 }, () => {
        this.loadPacientes()
      })
    }
  }

  loadPacientes = async () => {
    const { page } = this.state
    const response = await api.get('/pacientes?page=' + page);

    const { docs, pages } = response.data;

    this.setState({ docs, totalPage: pages });
  };

  render() {
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            {this.state.docs.map(paciente => {
              return (
                <CardPaciente key={paciente._id}
                  nome={paciente.name}
                  idade={paciente.idade}
                  cidade={paciente.cidade}
                  estado={paciente.estado}
                />
              )
            })}
          </View>
        </ScrollView>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5, backgroundColor: '#f9f9f9'
        }}>
          <TouchableOpacity style={{
            backgroundColor: '#292e35', padding: 10,
            borderRadius: 5
          }}
            onPress={this.backPage}>
            <Text style={{ color: '#FFF' }}>Anterior</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: '#292e35', padding: 10,
            borderRadius: 5
          }}
            onPress={this.nextPage}>
            <Text style={{ color: '#FFF' }}>Próxima</Text>
          </TouchableOpacity>

        </View>
      </>
    );
  }
}