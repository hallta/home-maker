var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: '' });

dbx.filesListFolder({path: ''})
  .then(function(response) {
          console.log(response);
        // make a new app and hide the token!! 
        //iterate over files, filesDownload(arg) -- http://dropbox.github.io/dropbox-sdk-js/global.html#FilesDownloadArg
            })
  .catch(function(error) {
          console.log(error);
            });


