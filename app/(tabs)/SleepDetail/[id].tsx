// app/(tabs)/SleepDetail/[id].tsx
import MediaCard from '@/components/MediaCard'; // Correct default import
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol'; // Add this import
import { getApp } from '@react-native-firebase/app';
import { getDownloadURL, getStorage, ref } from '@react-native-firebase/storage';
// import storage from '@react-native-firebase/storage';
import { setAudioModeAsync, useAudioPlayer } from 'expo-audio'; // Ensure this is the correct import
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

import { getAuth } from '@react-native-firebase/auth';

// Define the props type for the component
interface SleepDetailProps {
  navigation: any; // Replace 'any' with the correct type if available
}

// Get the device screen height
const { height } = Dimensions.get('window');

const SleepDetail: React.FC<SleepDetailProps> = ({ navigation }) => {
  const router = useRouter();
  const { id, title, author, length, audioUrl, imageUrl } = useLocalSearchParams(); // Use audioSource from params
  // const audioSource = typeof audioUrl === 'string' ? audioMapping[audioUrl] : null; // Get the audio source from the mapping
  const app = getApp();
  const storage = getStorage(app, "gs://mantra-444cf.firebasestorage.app");
  
  const [player, setPlayer] = useState<any>(null); // Change player to a state variable
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing
  const [audioFileUrl, setAudioFileUrl] = useState<string | null>(null); // State for the audio file URL
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const configureAudio = async () => {
      // 1. Set Audio Mode (should only happen once)
      try {
        await setAudioModeAsync({
            playsInSilentMode: true,
            shouldPlayInBackground: true,
            interruptionMode: 'duckOthers',
        });
        console.log('Audio mode set successfully (initial setup)');
      } catch (error) {
        console.error('Error setting audio mode:', error);
      }

    };

    configureAudio();

    // Cleanup function
    return () => {
      if (player) {
        console.log('Cleaning up audio player...');
        player.pause(); // Stop any playing audio
        player.remove(); // Unload the audio resource
        setPlayer(null); // Clear the player reference
        setIsPlaying(false); // Reset playing state
      }
    };
  }, []); // Empty dependency array for running once on mount

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        if (!audioUrl) {
          console.warn('audioUrl is undefined or null');
          return;
        }

        const audioPath = 'sleepstory-tracks/' + audioUrl + '.mp3';
        console.log('Attempting to fetch audio from path:', audioPath);
        
        const url = await getDownloadURL(ref(storage, audioPath));
        console.log('Successfully fetched audio URL:', url);
        setAudioFileUrl(url);
      } catch (error) {
        console.error('Error fetching audio URL:', error);
        // Log more details about the error
        if (error instanceof Error) {
          console.error('Error message:', error.message);
          console.error('Error stack:', error.stack);
        }
      }
    };

    fetchAudio();
  }, [audioUrl, storage]);

  // Use the audio player hook at the top level of the component
  const audioPlayer = useAudioPlayer(audioFileUrl); // Use the audio player with the fetched URL
  useEffect(() => {
    setPlayer(audioPlayer); // Set the player state when audioPlayer changes
  }, [audioPlayer]);

  const playSound = () => {
    if (!user) {
      router.push('/login');
    } else {
      if (player) {
        player.play(); // Start playing audio
        setIsPlaying(true); // Update state to indicate playing
      }
    }
  };

  const stopSound = () => {
    if (player) {
      player.pause(); // Pause the audio
      setIsPlaying(false); // Update state to indicate paused
    }
  };

  const handleBack = () => {
    router.navigate('/sleep');
    stopSound();
  };

  return (
    <View style={styles.container}>
      {/* <Button title="Back" onPress={() => router.navigate('../')} style={styles.backButton} /> */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <IconSymbol
          name="chevron.left"
          size={30}
          color="#000" // Set a color for the icon
        />
      </TouchableOpacity>

      {/* Use MediaCard component to display the sleep story details */}
      <View style={styles.mediaCardContainer}>
        <MediaCard item={{ id , title, length, audioUrl, imageUrl }} />
      </View>
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={playSound} style={styles.iconButton}>
          <IconSymbol name="play.circle" size={50} color={isPlaying ? "green" : "#000"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={stopSound} style={styles.iconButton}>
          <IconSymbol name="pause.circle" size={50} color="#000" />
        </TouchableOpacity>
      </View>

      {isPlaying && <ThemedText style={styles.playingText}>Playing...</ThemedText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30, // Adjust this value to match the height of the header you want to offset
  },
  mediaCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: height * 0.5, // Adjust height to 50% of the screen height
  },
  backButton: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center align the buttons
    marginTop: 20,
  },
  iconButton: {
    marginHorizontal: 20, // Space between buttons
  },
  playingText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: 'green', // Color for the playing status message
  }
});

export default SleepDetail;