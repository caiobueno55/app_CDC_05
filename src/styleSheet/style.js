import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  barraLogo: {
    backgroundColor: '#00153d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
    width: '100%',
  },
  logoImagem: {
    width: 150,
    height: 30,
  },
  scrollConteudo: {
    paddingHorizontal: 15,
  },
  banner: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  iconeCard: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
  textoCard: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
  },
  destaque: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  areaTags: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  tag: {
    backgroundColor: '#34aadc',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  textoTag: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  }
});