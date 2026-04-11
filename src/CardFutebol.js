import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/style';

export default function CardFutebol(props) {
  return (
    <View style={[estilos.card, { backgroundColor: props.cor }]}>
      <Image source={{ uri: props.icone }} style={estilos.icone} />
      <Text style={estilos.textoCard}>
        {props.texto} <Text style={estilos.negrito}>{props.destaque}</Text>
      </Text>
    </View>
  );
}