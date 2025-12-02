import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

type Exercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

export default function ExercisesScreen() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const muscle = 'chest'; // depois podemos trocar por filtro

  useEffect(() => {
    fetchExercises();
  }, []);

  async function fetchExercises() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
        {
          headers: {
            'X-Api-Key': '2wCkPDlmQTHWRWUs3Kc1Og==Wo8LDx7dsrhkPxK8',
          },
        }
      );
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.error('Erro ao buscar exercícios:', error);
    } finally {
      setLoading(false);
    }
  }

  function openModal(item: Exercise) {
    setSelected(item);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setSelected(null);
  }

  function renderItem({ item }: { item: Exercise }) {
    return (
      <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSub}>Tipo: {item.type}</Text>
        <Text style={styles.cardSub}>Músculo: {item.muscle}</Text>
        <Text style={styles.cardTag}>Toque para ver detalhes</Text>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#22c55e" />
        <Text style={styles.loadingText}>Carregando exercícios...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercícios para {muscle.toUpperCase()}</Text>

      <FlatList
        data={exercises}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />

      {/* MODAL OBRIGATÓRIO */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <ScrollView>
              <Text style={styles.modalTitle}>{selected?.name}</Text>
              <Text style={styles.modalText}>Tipo: {selected?.type}</Text>
              <Text style={styles.modalText}>Músculo: {selected?.muscle}</Text>
              <Text style={styles.modalText}>
                Equipamento: {selected?.equipment || 'Corpo livre'}
              </Text>
              <Text style={styles.modalText}>
                Dificuldade: {selected?.difficulty}
              </Text>

              <Text style={styles.modalSection}>Instruções</Text>
              <Text style={styles.modalInstructions}>
                {selected?.instructions}
              </Text>
            </ScrollView>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: '700',
    color: '#f9fafb',
    backgroundColor: '#0f172a',
  },
  listContent: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: '#0b1120',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#e5e7eb', marginBottom: 4 },
  cardSub: { fontSize: 13, color: '#9ca3af' },
  cardTag: {
    marginTop: 8,
    fontSize: 12,
    color: '#22c55e',
    fontWeight: '600',
  },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617' },
  loadingText: { marginTop: 8, color: '#e5e7eb' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#020617',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 8,
  },
  modalText: { fontSize: 14, color: '#e5e7eb', marginBottom: 4 },
  modalSection: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 15,
    fontWeight: '600',
    color: '#22c55e',
  },
  modalInstructions: { fontSize: 14, color: '#d1d5db', lineHeight: 20 },
  closeButton: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#22c55e',
    alignItems: 'center',
  },
  closeButtonText: { fontSize: 16, fontWeight: '700', color: '#022c22' },
});
