import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/style';
import CardInformativo from './CardInformativo';

export default function Conteudo() {
  return (
    <ScrollView style={estilos.container} showsVerticalScrollIndicator={false}>
      
      <View style={estilos.barraLogo}>
        <Text style={{color: 'white', fontSize: 24}}>≡</Text> 
        <Image 
          source={require('../img/logo2.png')} 
          style={estilos.logoImagem} 
          resizeMode="contain"
        />
        <Text style={{color: 'white', fontSize: 20}}>⌕</Text>
      </View>

      <View style={estilos.scrollConteudo}>
        <Image 
          source={require('../img/ia.png')} 
          style={estilos.banner} 
          resizeMode="cover"
        />

        <CardInformativo 
          cor="#eaf6e9"
          icone={require('../img/whatsapp.png')}
          texto="Informações em primeira mão! Siga o canal do ICL Notícias no"
          destaque="WhatsApp"
        />

        <CardInformativo 
          cor="#fff9e6"
          icone={require('../img/livro.png')}
          texto="Acesso total a mais de 300 cursos, materiais e séries! Seja"
          destaque="Membro ICL"
        />

        <CardInformativo 
          cor="#e6f2ff"
          icone={require('../img/google.png')}
          texto="Siga e acompanhe as atualizações do ICL Notícias também pelo"
          destaque="Google News"
        />
      </View>

      <View style={estilos.areaTags}>
        <View style={estilos.tag}><Text style={estilos.textoTag}>DIREITO AUTORAL</Text></View>
        <View style={estilos.tag}><Text style={estilos.textoTag}>BIG TECHS</Text></View>
        <View style={estilos.tag}><Text style={estilos.textoTag}>INTELIGÊNCIA ARTIFICIAL</Text></View>
      </View>

    </ScrollView>
  );
}