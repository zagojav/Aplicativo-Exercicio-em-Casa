import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Guilherme Zago</Text>
        <Text style={styles.info}>RA: 24750</Text>
        <Text style={styles.info}>Turma: 3°DS</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>Exercícios em Casa</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', alignItems: 'center', justifyContent: 'center' },
  card: {
    backgroundColor: '#0b1120',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1f2937',
    width: '80%',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#22c55e',
  },
  name: { fontSize: 20, fontWeight: '700', color: '#f9fafb', marginBottom: 4 },
  info: { fontSize: 14, color: '#9ca3af' },
  badge: {
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#22c55e20',
    borderWidth: 1,
    borderColor: '#22c55e',
  },
  badgeText: { color: '#bbf7d0', fontSize: 12, fontWeight: '600' },
});
