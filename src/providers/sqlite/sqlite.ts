import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

/*
  Generated class for the SqliteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//https://www.youtube.com/watch?v=Nn5RQpZBDsg

const DATABASE_FILE_NAME: string = "momie_fridge.db";
@Injectable()
export class SqliteProvider {

  private db: SQLiteObject;

  constructor(public http: HttpClient,  private sqlite: SQLite) {
    console.log("sqlite service is called");
    this.createDatabaseFile();
  }
  
  private createDatabaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.CreateTables();
      })
        .catch(e => console.log(e));

  }

  private CreateTables(): void {
    this.db.executeSql(`CREATE TABLE IF NOT EXISTS \`frigo\` (
      \`idingredient\` INTeger NOT NULL PRIMARY KEY AUTOINCREMENT,
      \`name\` text,
      \`quantite\` INTEger NULL,
      \`unite\` text\`
    );`,{})
    .then(() =>{console.log('ingredients table created')})

    this.db.executeSql(`CREATE IF NOT EXISTS TABLE \`listeCourse\` (
      \`idingredient\` INTeger NOT NULL PRIMARY KEY AUTOINCREMENT,
      \`name\` text,
      \`quantite\` INTEger NULL,
      \`unite\` text\`
      );`,{})
    .then(() =>{console.log('fridge table created')})

    this.db.executeSql(`CREATE IF NOT EXISTS TABLE \`recette\` (
      \`idingredient\` INTeger NOT NULL PRIMARY KEY AUTOINCREMENT,
      \`name\` text,
      \`quantite\` INTEger NULL,
      \`unite\` text\`
      );`,{})

    .then(() =>{console.log('recette table created')})

    .catch(e => console.log(e)
  )}

  public saveMyIngredients() {
    // INSERT INTO `frigo` (name,quantite,unite) values('sel',300,'g')
    // INSERT INTO `frigo` (name,quantite,unite) values('lait',1,'l')
    // INSERT INTO `frigo` (name,quantite,unite) values('sucre',300,'g')

    
    this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values('sel',300,'g',last_insert_rowid()))",{})

    .then(() =>{console.log('ingredient add in fridge')})
    .catch(e => console.log(e)
    )}
}
