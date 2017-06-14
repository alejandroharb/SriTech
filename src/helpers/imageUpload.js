/*
  example of photo obj
    let photo = {
        uri: uriFromCameraRoll,
        type: 'image/jpeg',
        name: 'photo.jpg',
    };

    file upload method2: axios-fileupload npm
*/
const uploadImage = (photo, serverURL) => {
  let body = new FormData();
  body.append('authToken', 'secret');
  body.append('photo', photo);
  body.append('title', 'A beautiful photo!');

  xhr.open('POST', serverURL);
  xhr.send(body);
}
