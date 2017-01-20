let watson = require(
    'C:/Users/IBM_ADMIN/AppData/Roaming/npm/node_modules/watson-developer-cloud'
);
let fs = require('fs');

let visual_recognition = watson.visual_recognition({
    api_key: '55c85a4304deb5441e8518a9d0225f7e77809940',
    version: 'v3',
    version_date: '2016-05-20'
});

let paramsClassify = {
    /* images_file --> (Required) The image file (.jpg, or .png) or
       compressed (.zip) file of images to classify.
       The max number of images in a .zip file is limited to 20,
        and limited to 5 MB. */
    images_file: fs.createReadStream('sample.jpg'),
    /* classifier_ids --> an array contains the visula recognition models,
       which may contain user trained model and watson 'default' module
       An array of classifier IDs to classify the images against. */
    "classifier_ids": ["people_1143812233", "default"],
    /* threshold --> A floating point value that specifies
       the minimum score a class must have to be displayed in the response. */
    "threshold": 0.0
};
/* Classify an image
   For each image, the response includes a score
   for each class within each selected classifier.
   Scores range from 0 - 1 with a higher score indicating
   greater likelihood of the class being depicted in the image.
   The default threshold for reporting scores from a classifier is 0.5.
   We recommend an image that is a minimum of 224 x 224 pixels
   for best quality results. */
let imageClassify = visual_recognition.classify(paramsClassify,
    function(err,
        res) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(res, null, 2));
    });
/* paramters to classify image */
let paramsClassify = {
    /* images_file --> (Required) The image file (.jpg, or .png) or
       compressed (.zip) file of images to classify.
       The max number of images in a .zip file is limited to 20,
        and limited to 5 MB. */
    images_file: fs.createReadStream('./resources/li.jpg'),
    /* classifier_ids --> an array contains the visula recognition models,
       which may contain user trained model and watson 'default' module
       An array of classifier IDs to classify the images against. */
    "classifier_ids": ["people_1143812233", "default"],
    /* threshold --> A floating point value that specifies
       the minimum score a class must have to be displayed in the response. */
    "threshold": 0.0
};
/* Classify an image
   For each image, the response includes a score
   for each class within each selected classifier.
   Scores range from 0 - 1 with a higher score indicating
   greater likelihood of the class being depicted in the image.
   The default threshold for reporting scores from a classifier is 0.5.
   We recommend an image that is a minimum of 224 x 224 pixels
   for best quality results. */
let classifyImage = visual_recognition.classify(paramsClassify, function(err,
    res) {
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify(res, null, 2));
});

let paramsCreate = {
    /* The name of the new classifier.
       Cannot contain spaces or special characters. */
    name: 'people',
    /* {classname}_positive_examples: (Required)
       A compressed (.zip) file of images that depict the visual subject
       for a class within the new classifier.
       Must contain a minimum of 10 images. */
    liyang_positive_examples: fs.createReadStream('./resources/liyang.zip'),
    zhangxueyou_positive_examples: fs.createReadStream(
        './resources/zhangxueyou.zip'),
    /* negative_examples: (Optinal)
       A compressed (.zip) file of images that do not depict the visual subject
       of any of the classes of the new classifier.
       Must contain a minimum of 10 images.*/
    negative_examples: fs.createReadStream('./resources/other.zip')
};
/* Train a new multi-faceted classifier on the uploaded image data.
   A new custom classifier can be trained by several compressed (.zip) files,
   including files containing positive or negative images (.jpg, or .png).
   You must supply at least two compressed files,
   either two positive example files or one positive and one negative example file.*/
let createClassifier = visual_recognition.createClassifier(paramsCreate,
    function(err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    });


// Retrieve information about a specific classifier.
let getClassifier = visual_recognition.getClassifier({
        //Required. The ID of the classifier for which you want details.
        classifier_id: 'people_1143812233'
    },
    function(err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    }
);

//Delete a custom classifier with the specified classifier ID.
let deleteClassifier = visual_recognition.deleteClassifier({
        //The ID of the classifier you want to delete.
        classifier_id: 'people_975487466'
    },
    function(err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    }
);
//Retrieve a list of user-created classifiers.
let listClassifiers = visual_recognition.listClassifiers({},
    function(err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    }
);
