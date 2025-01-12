import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button';

const Card: React.FC = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Card Title</Text>
      <Text style={styles.description}>This is a description of the card.</Text>
      <Button text="Learn More" onPress={() => alert('Card button pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default Card;