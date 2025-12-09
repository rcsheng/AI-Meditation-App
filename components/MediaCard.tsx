// app/(tabs)/MediaCard.tsx
import imageMapping from '@/components/imageMapping';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface MediaCardProps {
  item: {
    id: string;
    title: string;
    author: string;
    length: number;
    audioUrl: string;
    imageUrl: string;
  };
}

const MediaCard: React.FC<MediaCardProps> = ({ item }) => {
  const imageSource = imageMapping[item.imageUrl as keyof typeof imageMapping];

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <ThemedText type="title">{item.title}</ThemedText>
        {/* <ThemedText>{`By: ${item.author}`}</ThemedText> */}
        <ThemedText>{`${item.length} min`}</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '100%',
    height: '100%',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 16,
  },
});

export default MediaCard;