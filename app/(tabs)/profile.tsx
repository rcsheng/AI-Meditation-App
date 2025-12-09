import { getAuth } from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Profile = () => {
  const [user, setUser] = useState<any>(null); // Use 'any' for simplicity
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      Alert.alert('Success', 'You have been logged out.');
      setUser(null); // Clear user state
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          {/* <Text style={styles.text}>Username: {user.displayName || 'N/A'}</Text> */}
          <Text style={styles.text}>Email: {user.email}</Text>
          <Button title="Log Out" onPress={handleLogout} />
        </>
      ) : (
        <View>
          <Text style={styles.text}>You are not logged in.</Text>
          <Button title="Log In" onPress={() => router.push('/login')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    marginBottom: 12,
    fontSize: 18,
  },
});

export default Profile;
