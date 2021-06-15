import React from 'react';
import {
  View
} from 'react-native';
import {TextInput,Button} from 'react-native-paper';

function AddProduct() {
  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');

  const addSingleProduct = ()=>{
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
          title: {title},
          price: {price},
          category: {category},
        }),
      })
        .then(res => res.json())
        .then(json => console.log(json));
  }

  return (
    <View style={{marginTop:200,width:"70%",margin:60}}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TextInput
        label="Category"
        value={category}
        onChangeText={text => setCategory(text)}
      />

      <TextInput
        label="Price"
        value={price}
        onChangeText={text => setPrice(text)}
      />

      <Button
        mode="contained"
        onPress={addSingleProduct}
        >
        Add Product
      </Button>
    </View>
  );
}

export default AddProduct;
