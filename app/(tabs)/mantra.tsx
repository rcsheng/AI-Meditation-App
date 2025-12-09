import MantraCard from '@/components/MantraCard'; // Adjust the path as necessary
import { IconSymbol } from '@/components/ui/IconSymbol'; // Add this import
import React, { useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';


const affirmations = [
  { text: "You are enough." },
  { text: "Believe in yourself." },
  { text: "Every day is a new beginning." },
  { text: "I am capable of amazing things." },
  { text: "My potential is limitless." },
  { text: "I choose joy." },
  { text: "I am strong and resilient." },
  { text: "I embrace challenges as opportunities to grow." },
  { text: "I am worthy of love and happiness." },
  { text: "I forgive myself and others." },
  { text: "I am at peace with my past." },
  { text: "I live in the present moment." },
  { text: "The future is bright." },
  { text: "I trust the process of life." },
  { text: "I am grateful for all that I have." },
  { text: "I attract positivity into my life." },
  { text: "I radiate confidence." },
  { text: "I am in control of my thoughts and feelings." },
  { text: "I create my own reality." },
  { text: "I am healthy and vibrant." },
  { text: "My body is strong and capable." },
  { text: "I nourish my mind, body, and soul." },
  { text: "I am filled with energy and vitality." },
  { text: "I take care of myself with love and respect." },
  { text: "I am surrounded by love and support." },
  { text: "I build meaningful connections with others." },
  { text: "I am a source of love and kindness." },
  { text: "I contribute positively to the world." },
  { text: "I make a difference." },
  { text: "My voice matters." },
  { text: "I speak my truth with courage." },
  { text: "I listen to my intuition." },
  { text: "I trust my inner wisdom." },
  { text: "I am guided and protected." },
  { text: "I am open to receiving abundance." },
  { text: "I am worthy of success." },
  { text: "I achieve my goals with ease." },
  { text: "I am aligned with my purpose." },
  { text: "I follow my dreams fearlessly." },
  { text: "I embrace change with grace." },
  { text: "I learn and grow from every experience." },
  { text: "I am constantly evolving into the best version of myself." },
  { text: "I celebrate my progress and achievements." },
  { text: "I am proud of who I am." },
  { text: "I accept myself unconditionally." },
  { text: "I am perfectly imperfect." },
  { text: "I am a unique and valuable individual." },
  { text: "I honor my individuality." },
  { text: "I express myself authentically." },
  { text: "I am creative and resourceful." },
  { text: "I find solutions with ease." },
  { text: "I am intelligent and capable." },
  { text: "My mind is clear and focused." },
  { text: "I make wise decisions." },
  { text: "I am organized and efficient." },
  { text: "I manage my time effectively." },
  { text: "I am disciplined and motivated." },
  { text: "I persevere through challenges." },
  { text: "I am persistent and determined." },
  { text: "I never give up on my dreams." },
  { text: "I am open to new possibilities." },
  { text: "I embrace the unknown with excitement." },
  { text: "I trust the journey." },
  { text: "I am exactly where I need to be." },
  { text: "Everything is working out for my highest good." },
  { text: "I am safe and secure." },
  { text: "I am protected and guided." },
  { text: "I release fear and embrace courage." },
  { text: "I am filled with inner peace." },
  { text: "I cultivate calmness within me." },
  { text: "I am centered and grounded." },
  { text: "I find stillness in the present moment." },
  { text: "I appreciate the beauty around me." },
  { text: "I notice the small joys in life." },
  { text: "I savor every experience." },
  { text: "I live with intention." },
  { text: "I am grateful for this day." },
  { text: "I make the most of every opportunity." },
  { text: "I am a magnet for positive energy." },
  { text: "I attract abundance in all areas of my life." },
  { text: "I am open to receiving miracles." },
  { text: "I trust in the universe's plan for me." },
  { text: "I surrender to what is." },
  { text: "I flow with life's changes." },
  { text: "I am adaptable and flexible." },
  { text: "I find strength in vulnerability." },
  { text: "I am honest with myself and others." },
  { text: "I build relationships based on trust and respect." },
  { text: "I communicate effectively and with kindness." },
  { text: "I set healthy boundaries." },
  { text: "I honor my needs and desires." },
  { text: "I prioritize my well-being." },
  { text: "I nurture myself with love and care." },
  { text: "I listen to my body's wisdom." },
  { text: "I move my body with joy and intention." },
  { text: "I nourish my body with healthy foods." },
  { text: "I get enough rest and rejuvenation." },
  { text: "I create a life I love." },
  { text: "I am the architect of my own happiness." },
  { text: "I design a life that fulfills me." },
  { text: "I am living my purpose." },
  { text: "I am making a positive impact." },
  { text: "I am a force for good in the world." },
  { text: "I contribute my unique talents and gifts." },
  { text: "I inspire others with my actions." },
  { text: "I am a beacon of light." },
  { text: "I shine brightly." },
  { text: "My light illuminates the path for others." },
  { text: "I am connected to something greater than myself." },
  { text: "I am part of the interconnected web of life." },
  { text: "I feel a sense of belonging." },
  { text: "I am loved and cherished." } ];

const getRandomIndex = () => Math.floor(Math.random() * affirmations.length);

const AffirmationScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(getRandomIndex());
  const translateY = new Animated.Value(0);

  const handleSwipeUp = () => {
    Animated.timing(translateY, {
      toValue: -500, // Adjust this value based on your design
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(getRandomIndex()); // Get a new random index
      translateY.setValue(0); // Reset position
    });
  };


  const getRandomSoftColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.5)`; // Soft color
  };

  const { text } = affirmations[currentIndex];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cardContainer, { transform: [{ translateY }] }]}>
        <MantraCard text={text} backgroundColor={getRandomSoftColor()} />
        <TouchableOpacity onPress={handleSwipeUp} style={styles.arrowContainer}>
          {/* <Text style={styles.arrow}></Text>  */}
          <IconSymbol
            name="chevron.up"
            size={30}
            color="#000" // Set a color for the icon
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Soft background color
  },
  cardContainer: {
    alignItems: 'center',
    width: '100%',
    height: '50%'
  },
  arrowContainer: {
    marginTop: 20,
  },
  arrow: {
    fontSize: 30,
  },
});

export default AffirmationScreen;