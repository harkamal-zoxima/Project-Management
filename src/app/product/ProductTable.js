import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { DataTable } from 'react-native-paper';

function ProductTable() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  console.log(products);

  return (
    <ScrollView>
      <View>
      <DataTable>
                <DataTable.Header>
                  <DataTable.Title >ID</DataTable.Title>
                  <DataTable.Title >Title</DataTable.Title>
                  <DataTable.Title >Category</DataTable.Title>
                  <DataTable.Title numeric>Price</DataTable.Title>
                </DataTable.Header>
                </DataTable>
        {products &&
          products.map(item => {
            return (
                <DataTable>

                <DataTable.Row>
                  <DataTable.Cell>{item.id}</DataTable.Cell>
                  <DataTable.Cell>{item.title}</DataTable.Cell>
                  <DataTable.Cell >{item.category}</DataTable.Cell>
                  <DataTable.Cell numeric>{'$'+item.price}</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            );
          })}
      </View>
    </ScrollView>
  );
}

export default ProductTable;
