let watson = require(
    'watson-developer-cloud'
);
let exec = require('child_process').exec;
let takePic = "raspistill -o sample.jpg";
let cpsPic = "jpegoptim --size=1500k sample.jpg";
let fs = require('fs');

let visual_recognition = watson.visual_recognition({
    api_key: '55c85a4304deb5441e8518a9d0225f7e77809940',
    version: 'v3',
    version_date: '2016-05-20'
});

exec(takePic, function(err, stdout, stderr) {
    if (err) {
        console.log('error:' + stderr);
    } else {
        exec(cpsPic, function(err, stdout, stderr) {
            if (err) {
                console.log('error:' + stderr);
            } else {
                console.log("conpressed!");
                let paramsClassify = {
                    images_file: fs.createReadStream(
                        'sample.jpg'),
                    "classifier_ids": ["people_1143812233",
                        "default"
                    ],
                    "threshold": 0.0
                };
                visual_recognition.classify(paramsClassify,
                    function(err, res) {
                        if (err)
                            console.log(err);
                        else
                            console.log(JSON.stringify(res,
                                null, 2));
                    });
            }
        });
    }
});
