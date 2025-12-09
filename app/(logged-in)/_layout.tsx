import { getAuth, onAuthStateChanged, User } from '@react-native-firebase/auth';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function AuthLayout() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const auth = getAuth();
        const subscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
                if (initializing) setInitializing(false);
            } else {
                // User is signed out
                setUser(undefined); // Explicitly set user to undefined
                if (initializing) setInitializing(false);
            }
        });
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return <Redirect href="/login" />;
    }

    return (<Stack 
        screenOptions={{
            headerShown: false, // Hide the header for all screens in this stack
        }}/>
    );
}