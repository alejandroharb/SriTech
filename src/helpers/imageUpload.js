/*
  example of photo obj
    let photo = {
        uri: uriFromCameraRoll,
        type: 'image/jpeg',
        name: 'photo.jpg',
    };

    file upload method2: axios-fileupload npm
*/
import watsonAPIKey from '../../config/watson';
import axios from 'axios';

const serverURL = `https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=${watsonAPIKey}&version=2016-05-20`

const myServer = 'https://global-health.herokuapp.com/upload';

export default uploadImage = (photo) => {
  // let xhr =  new XMLHttpRequest();
  params = { "classifier_ids": ["Dogs_596994746", "default"]}
  let body = new FormData();
  body.append('parameters', params);

  // xhr.open('POST', serverURL);
  // xhr.send(body);
  axios.post(myServer, body)
    .then( (response) => { console.log(response)})
    .catch( error => console.log(error));
}
