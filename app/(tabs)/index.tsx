// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome Richard!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
import MediaCard from '@/components/MediaCard'; // Import the new component
import { Link } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

const meditationData = [
  // {
  //   id: '1',
  //   title: 'Morning Meditation',
  //   author: 'John Doe',
  //   length: 10,
  //   imageUrl:'meditation1', // Replace with your image path
  //   audioUrl: '1', // Mock audio URL
  // },
  // {
  //   id: '2',
  //   title: 'Evening Relaxation',
  //   author: 'Jane Smith',
  //   length: 15,
  //   imageUrl: 'meditation2', // Replace with your image path
  //   audioUrl: '2', // Mock audio URL
  // },
  {
    id: '1',
    title: '1-Minute Guided Meditation for a Mental Reset',
    // author: 'Jean-Luc Picard',
    length: '1:29',
    imageUrl:'meditation1', // Replace with your image path
    audioUrl: '1', // Mock audio URL
  },
  {
    id: '2',
    title: '3-Minute Guided Meditation: Mindful Breathing',
    // author: 'Bob Avery',
    length: '3:09',
    imageUrl: 'meditation2', // Replace with your image path
    audioUrl: '2', // Mock audio URL
  },
  {
    id: '3',
    title: 'Perfect 10 Breaths for Centering and Quieting the Mind',
    // author: 'Bob Avery',
    length: '13:46',
    imageUrl: 'meditation3', // Replace with your image path
    audioUrl: '3', // Mock audio URL
  },
  {
    id: '4',
    title: 'Sleep Meditation: Under the Stars',
    // author: 'Bob Avery',
    length: '7:56',
    imageUrl: 'meditation4', // Replace with your image path
    audioUrl: '4', // Mock audio URL
  },
  {
    id: '5',
    title: 'Putting the Day to Rest',
    // author: 'Bob Avery',
    length: '8:46',
    imageUrl: 'meditation5', // Replace with your image path
    audioUrl: '5', // Mock audio URL
  },
  {
    id: '6',
    title: 'Guided Meditation for Open Awareness',
    // author: 'Bob Avery',
    length: '10:23',
    imageUrl: 'meditation6', // Replace with your image path
    audioUrl: '6', // Mock audio URL
  },
  {
    id: '7',
    title: 'Beginner\'s Mind & Non-Striving Mindful Practice',
    // author: 'Bob Avery',
    length: '8:14',
    imageUrl: 'meditation7', // Replace with your image path
    audioUrl: '7', // Mock audio URL
  },
  {
    id: '8',
    title: 'Guided Meditation for Peace of Mind',
    // author: 'Bob Avery',
    length: '4:55',
    imageUrl: 'meditation8', // Replace with your image path
    audioUrl: '8', // Mock audio URL
  },
  {
    id: '9',
    title: 'Cultivating Inner Peace',
    // author: 'Bob Avery',
    length: '12:02',
    imageUrl: 'meditation9', // Replace with your image path
    audioUrl: '9', // Mock audio URL
  },
  {
    id: '10',
    title: 'Cultivating Self-compassion and Acceptance',
    // author: 'Bob Avery',
    length: '3:24',
    imageUrl: 'meditation10', // Replace with your image path
    audioUrl: '10', // Mock audio URL
  },
  
  // Add more meditation items as needed
];

// const renderMeditationCard = ({ item }: { item: { id: string; title: string; author: string; length: number; audioUrl: string; image: any; } }) => (
//   <Link
//     href={{
//       pathname: '/MeditationDetail/[id]',
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

const renderMeditationCard = ({ item }) => (
  <Link
    href={{
      pathname: '/MeditationDetail/[id]',
      params: { 
        id: item.id,
        title: item.title,
        author: item.author,
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

export default function HomeScreen() {
  return (
    <FlatList
      data={meditationData}
      renderItem={renderMeditationCard}
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