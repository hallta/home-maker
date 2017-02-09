var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'SpYgOK-oZXQAAAAAAAB4MxSY-ezl6oV0lV4u-vSfG0CznMII9-hpb5_A8SKz4_v4' });

dbx.filesListFolder({path: ''})
  .then(function(response) {
          console.log(response);
        //iterate over files, filesDownload(arg) -- http://dropbox.github.io/dropbox-sdk-js/global.html#FilesDownloadArg
            })
  .catch(function(error) {
          console.log(error);
            });


