
import MediaCard from '@/components/MediaCard'; // Import the new component
import { Link } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

const sleepData = [
  {
    id: '1',
    title: 'The Lighthouse Keeper\'s Journal',
    // author: 'Jean-Luc Picard',
    length: '3:09',
    imageUrl:'sleep1', // Replace with your image path
    audioUrl: '1', // Mock audio URL
  },
  {
    id: '2',
    title: 'The Man Who Fixed Clocks',
    // author: 'Bob Avery',
    length: '3:31',
    imageUrl: 'sleep2', // Replace with your image path
    audioUrl: '2', // Mock audio URL
  },
  {
    id: '3',
    title: 'The Forest That Waited for Him',
    // author: 'Bob Avery',
    length: '4:26',
    imageUrl: 'sleep3', // Replace with your image path
    audioUrl: '3', // Mock audio URL
  },
  {
    id: '4',
    title: 'The Lost Art of Stargazing',
    // author: 'Bob Avery',
    length: '8:32',
    imageUrl: 'sleep4', // Replace with your image path
    audioUrl: '4', // Mock audio URL
  },
  {
    id: '5',
    title: 'The Sound of the Quietest Tide',
    // author: 'Bob Avery',
    length: '8:28',
    imageUrl: 'sleep5', // Replace with your image path
    audioUrl: '5', // Mock audio URL
  },
  {
    id: '6',
    title: 'The Antique Mapmaker\'s Journal',
    // author: 'Bob Avery',
    length: '11:11',
    imageUrl: 'sleep6', // Replace with your image path
    audioUrl: '6', // Mock audio URL
  },
  {
    id: '7',
    title: 'The Café of Forgotten Melodies',
    // author: 'Bob Avery',
    length: '11:35',
    imageUrl: 'sleep7', // Replace with your image path
    audioUrl: '7', // Mock audio URL
  },
  {
    id: '8',
    title: 'The Island of Whispering Trees',
    // author: 'Bob Avery',
    length: '6:46',
    imageUrl: 'sleep8', // Replace with your image path
    audioUrl: '8', // Mock audio URL
  },
  {
    id: '9',
    title: 'The Artisan of Forgotten Flavors',
    // author: 'Bob Avery',
    length: '25:52',
    imageUrl: 'sleep9', // Replace with your image path
    audioUrl: '9', // Mock audio URL
  },
  {
    id: '10',
    title: 'The Last Ferry to the Dream Isles',
    // author: 'Bob Avery',
    length: '22:07',
    imageUrl: 'sleep10', // Replace with your image path
    audioUrl: '10', // Mock audio URL
  },
  // Add more sleep items as needed
];

// const rendersleepCard = ({ item }: { item: { id: string; title: string; author: string; length: number; audioUrl: string; image: any; } }) => (
//   <Link
//     href={{
//       pathname: '/sleepDetail/[id]',
//       params: { 
//         id: item.id,
//         title: item.title,
//         author: item.author,
//         length: item.length,
//         audioUrl: item.audioUrl, // Pass the audio source
//       },
//     }}
//     style={styles.card}
//   >
//     <Image source={item.image} style={styles.cardImage} />
//     <View style={styles.cardContent}>
//       <ThemedText type="title">{item.title}</ThemedText>
//       <ThemedText>{`By: ${item.author}`}</ThemedText>
//       <ThemedText>{`${item.length} min`}</ThemedText>
//     </View>
//   </Link>
// );

const renderSleepCard = ({ item }) => (
  <Link
    href={{
      pathname: '/SleepDetail/[id]',
      params: { 
        id: item.id,
        title: item.title,
        // author: item.author,
        length: item.length,
        audioUrl: item.audioUrl, // Pass the audio source
        imageUrl: item.imageUrl, // Pass image source
      },
    }}
    style={styles.card}
  >
    <MediaCard item={item} />
  </Link>
);

export default function SleepScreen() {
  return (
    <FlatList
      data={sleepData}
      renderItem={renderSleepCard}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
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
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 16,
  },
});