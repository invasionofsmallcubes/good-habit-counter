import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  }, [groceryItem, items]);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={groceryItem}
          placeholder="Enter grocery item"
          onChangeText={(text) => setGroceryItem(text)}
        />
        <Button
          title="Add the item to list"
          onPress={addNewItemToShoppingList}
        />
        {items.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
