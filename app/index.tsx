import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Exercícios em Casa</Text>
        <Text style={styles.appSubtitle}>Treine sem sair do seu quarto</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.cardHighlight}>
          <Text style={styles.cardTitle}>Comece um treino rápido</Text>
          <Text style={styles.cardText}>
            Escolha um grupo muscular e veja exercícios com instruções passo a passo.
          </Text>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Ver exercícios</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Sugestões rápidas</Text>

        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>Treino de braços</Text>
            <Text style={styles.gridText}>Foco em bíceps e tríceps</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>Treino de pernas</Text>
            <Text style={styles.gridText}>Agachamentos e mais</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>Abdominais</Text>
            <Text style={styles.gridText}>Fortaleça seu core</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>Alongamento</Text>
            <Text style={styles.gridText}>Recupere o corpo</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Projeto PAM2 • Exercícios em Casa</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: '#111827',
  },
  appTitle: { fontSize: 28, fontWeight: 'bold', color: '#f9fafb' },
  appSubtitle: { marginTop: 4, color: '#9ca3af', fontSize: 14 },
  content: { padding: 20, gap: 20 },
  cardHighlight: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#374151',
  },
  cardTitle: { fontSize: 20, fontWeight: '600', color: '#f9fafb', marginBottom: 8 },
  cardText: { fontSize: 14, color: '#9ca3af', marginBottom: 16 },
  primaryButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
  },
  primaryButtonText: { color: '#022c22', fontWeight: '700', fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#e5e7eb' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#020617',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  gridTitle: { fontSize: 14, fontWeight: '600', color: '#f9fafb', marginBottom: 4 },
  gridText: { fontSize: 12, color: '#9ca3af' },
  footer: { marginTop: 10, alignItems: 'center' },
  footerText: { fontSize: 12, color: '#6b7280' },
});
