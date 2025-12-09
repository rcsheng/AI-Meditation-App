import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



interface MantraCardProps {
  text: string;
  source?: string;
  backgroundColor?: string; // Added backgroundColor prop
}

const MantraCard: React.FC<MantraCardProps> = ({ text, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor: '#FFFFFF' }]}>
      <Text style={styles.mantra}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // card: {
  //   width: '90%',
  //   height: '80%',
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 20,
  //   elevation: 5,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  // },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '90%',
    height: '80%',
  },
  mantra: {
    fontSize: 28, // Increased font size
    textAlign: 'center',
    color: '#000000', // White text for contrast
    fontWeight: 'bold', // Bold text for emphasis
  },
  source: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
  },
});

export default MantraCard;
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// interface MantraCardProps {
//   text: string;
//   source?: string;
// }

// const MantraCard: React.FC<MantraCardProps> = ({ text }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.mantra}>{text}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     width: '90%',
//     height: '80%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     elevation: 5, // For Android shadow
//     shadowColor: '#000', // For iOS shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   mantra: {
//     fontSize: 24,
//     textAlign: 'center',
//   },
//   source: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     marginTop: 10,
//   },
// });

// export default MantraCard;