import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/style';
import CardFutebol from './CardFutebol';

export default function Conteudo() {
  return (
    // Esta View substitui a necessidade de cabeçalhos/rodapés externos
    <View style={estilos.containerPrincipal}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Banner Local (Pasta img) */}
        <View style={estilos.areaBanner}>
          <Image 
            source={require('../img/brasileirao.png')} 
            style={estilos.banner} 
            resizeMode="contain" 
          />
        </View>

        {/* Cards Coloridos */}
        <CardFutebol 
          cor="#eaf6e9" 
          icone="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
          texto="Receba escalações e notícias em tempo real! Siga o canal no"
          destaque="WhatsApp"
        />

        <CardFutebol 
          cor="#fff9e6" 
          icone="https://cdn-icons-png.flaticon.com/512/1163/1163048.png"
          texto="Tenha acesso a bastidores exclusivos e sorteio de ingressos!"
          destaque="Seja Sócio Torcedor"
        />

        <CardFutebol 
          cor="#e6f2ff" 
          icone="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          texto="Acompanhe a tabela e estatísticas do campeonato pelo"
          destaque="Google News"
        />

        {/* Tags Azuis */}
        <View style={estilos.areaTags}>
          <Text style={estilos.txtTag}>LIBERTADORES</Text>
          <Text style={estilos.txtTag}>MERCADO DA BOLA</Text>
          <Text style={estilos.txtTag}>SELEÇÃO</Text>
        </View>

      </ScrollView>
    </View>
  );
}