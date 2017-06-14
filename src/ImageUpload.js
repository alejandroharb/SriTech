import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import imageFileSend from './helpers/imageUpload';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }


  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
    });

    imageFileSend(result.uri);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
