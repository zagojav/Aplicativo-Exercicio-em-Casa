import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Sobre o aplicativo</Text>

      <Text style={styles.text}>
        Este app foi desenvolvido como projeto da disciplina PAM2, utilizando React Native e Expo.
      </Text>

      <Text style={styles.text}>
        O objetivo é ajudar pessoas a treinarem em casa, consultando exercícios por grupo muscular,
        com instruções detalhadas fornecidas por uma API pública.
      </Text>

      <Text style={styles.subtitle}>Tecnologias</Text>
      <Text style={styles.item}>• React Native</Text>
      <Text style={styles.item}>• Expo</Text>
      <Text style={styles.item}>• Expo Router (navegação)</Text>
      <Text style={styles.item}>• API Ninjas (exercises)</Text>

      <Text style={styles.subtitle}>Funcionalidades</Text>
      <Text style={styles.text}>
        • Tela inicial com destaques de treinos.{'\n'}
        • Abas para visualizar exercícios e favoritos.{'\n'}
        • Modal com detalhes completos de cada exercício.{'\n'}
        • Tela de perfil do aluno.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', color: '#f9fafb', marginBottom: 16 },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#e5e7eb', marginTop: 20, marginBottom: 8 },
  text: { fontSize: 14, color: '#d1d5db', marginBottom: 10, lineHeight: 20 },
  item: { fontSize: 14, color: '#9ca3af', marginBottom: 4 },
});
