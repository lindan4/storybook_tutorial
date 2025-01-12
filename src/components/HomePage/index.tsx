import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '../Card';

const HomePage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});

export default HomePage;