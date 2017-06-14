// import watsonAPIKey from '../../config/watson';
// const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
// const RNFS = require('react-native-fs');
//
//
//
// export const watsonCall = (uri) => {
//   var visual_recognition = new VisualRecognitionV3({
//     api_key: watsonAPIKey,
//     version_date: VisualRecognitionV3.VERSION_DATE_2016_05_20
//   });
//
//   var params = {
//     images_file: RNFS.readFile(uri)
//   };
//
//   visual_recognition.classify(params, function(err, res) {
//     if (err)
//       console.log(err);
//     else
//       console.log(JSON.stringify(res, null, 2));
//   });
// }
