import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/style';

export default function CardInformativo(props) {
  return (
    <View style={[estilos.card, { backgroundColor: props.cor }]}>
      <Image source={props.icone} style={estilos.iconeCard} />
      <Text style={estilos.textoCard}>
        {props.texto} <Text style={estilos.destaque}>{props.destaque}</Text>
      </Text>
    </View>
  );
}