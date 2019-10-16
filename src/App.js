/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { WebView } from 'react-native-webview';
import {StatusBar} from  'react-native';



const App = () => {
  return (
      
 <>
 <StatusBar backgroundColor="black" barStyle="light-content" />
    <WebView
      source={{uri:'https://cajui.ifnmg.edu.br/cajui/login'}}
      style={{marginTop: 0}}
    />
   </>
  )
};

export default App;