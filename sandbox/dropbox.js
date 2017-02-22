var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: '' });

dbx.filesListFolder({path: ''})
  .then(function(response) {
      //console.log(response);

      for ( file in response.entries ) {
          //console.log( response.entries[file].path_display );
          dbx.filesGetTemporaryLink({ path: response.entries[file].path_display })
              .then(function(r) {
                  console.log(r.link);
              }).catch(function(e) {
                  console.log(e);
              });
      }

  }).catch(function(error) {
      console.log(error);
  });


