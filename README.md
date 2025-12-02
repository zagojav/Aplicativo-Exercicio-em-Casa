# 🏋️ Aplicativo de Exercícios em Casa

Aplicativo mobile desenvolvido em **React Native** com **Expo** para a disciplina **PAM2**.  
Permite consultar exercícios por grupo muscular usando a **API Ninjas**.

---

## 📱 Sobre o app

- Tema: Exercícios em casa
- Objetivo: Mostrar exercícios com instruções detalhadas para treinar em casa
- Funcionalidades principais:
  - Tela inicial com destaque de treinos
  - Abas para **Exercícios** e **Favoritos**
  - Modal com detalhes completos do exercício
  - Menu lateral com acesso a **Início**, **Treinos**, **Perfil** e **Sobre**

---

## 🧰 Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- React Navigation (Drawer via Expo Router)
- Fetch API (requisições HTTP)

---

## 📦 Bibliotecas / Módulos Expo

(ajuste se tiver algo a mais/menos)

- `expo-status-bar` – controle da barra de status
- `expo-constants` – acesso a informações do app
- `expo-linear-gradient` – efeitos de gradiente (se usar)
- `expo-font` – gerenciamento de fontes
- `@expo/vector-icons` – ícones (Ionicons)
- `expo-splash-screen` – controle da tela de splash

---

## 🌐 API pública consumida

**API Ninjas – Exercises**

- Endpoint: `https://api.api-ninjas.com/v1/exercises`
- Dados usados no app:
  - `name`
  - `type`
  - `muscle`
  - `equipment`
  - `difficulty`
  - `instructions`

A chave da API (`X-Api-Key`) é configurada diretamente na tela de **Exercícios** em `app/(tabs)/exercises.tsx`.

---

## 🗺️ Estrutura de navegação

- **Drawer Navigation (menu lateral)** – definido em `app/_layout.tsx`:
  - `index` → **Início** (Home)
  - `(tabs)` → **Treinos** (duas tabs)
  - `profile` → **Perfil**
  - `about` → **Sobre**

- **Tabs (2 abas)** – definidas em `app/(tabs)/_layout.tsx`:
  - `exercises` → lista de exercícios (consome API + Modal)
  - `favorites` → tela de favoritos (layout pronto)

- **Modal**:
  - Implementado em `app/(tabs)/exercises.tsx`
  - Abre ao tocar em um exercício
  - Mostra tipo, músculo, equipamento, dificuldade e instruções

---

## 🧾 Estrutura de telas (5 telas)

- `app/index.tsx` → **Home**
- `app/(tabs)/exercises.tsx` → **Exercícios**
- `app/(tabs)/favorites.tsx` → **Favoritos**
- `app/profile.tsx` → **Perfil**
- `app/about.tsx` → **Sobre**

Todas usando **StyleSheet** do React Native.
