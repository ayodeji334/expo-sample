import React from 'react';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { StyleSheet, View } from 'react-native';

export default function FundWallet() {
  const { confirmPayment } = useStripe();

  return (
      <View style={styles.container}>
        <CardField
            postalCodeEnabled={false}
            placeholder={{
                number: '4242 4242 4242 4242',
            }}
            cardStyle={{
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
            }}
            style={{
                width: '100%',
                height: '100%',
                marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
                console.log('cardDetails', cardDetails);
            }}
            onFocus={(focusedField) => {
                console.log('focusField', focusedField);
            }}
            
         />
      </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})