import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40, 
  },
  areaBanner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: 250,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 12,
    marginBottom: 10,
  },
  icone: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
  textoCard: {
    flex: 1,
    fontSize: 14,
    color: '#444',
  },
  negrito: {
    fontWeight: 'bold',
    color: '#000',
  },
  areaTags: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
  },
  txtTag: {
    backgroundColor: '#34aadc',
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 8,
    textAlign: 'center',
    overflow: 'hidden',
  }
});
