import { Injectable } from '@angular/core';

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, function (err:any, db:any) {

  var cursor = db.collection('Usuarios').find();

  cursor.each(function (err:any, doc:any) {

    console.log(doc);

  });
});



@Injectable({
  providedIn: 'root'
})

export class BaseDatosService {




  constructor() { }

}
