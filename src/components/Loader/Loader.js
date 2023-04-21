import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { color } from '../../shared/constent';
const Loader = ({ show }) => {
  console.log(show, 'value');
  return (
    <>
      <ActivityIndicator
        animating={show}
        color={color.firstColor}
        size={60}
        hidesWhenStopped={true}
        style={{
          marginBottom: 30,
          flex: 1,
        }}
      />
    </>
  );
};
export default Loader;
