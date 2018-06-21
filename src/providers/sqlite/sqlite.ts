// import { HttpClient } from '@angular/common/http';
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

  constructor( private sqlite: SQLite) {
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

    .catch(e => console.log(e+ 'not table create')
  )}

  public saveMyIngredients(name: string, quantite: string, unite: string) {
    
    this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values(" + name +','+quantite + ','+ unite+")",{})
    .then(() =>{console.log('ingredient add in fridge')})
    .catch(e => console.log(e+'not save'))
  }


    // this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values('sucre',300,'g')",{})
    // this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values('poivre',200,'g')",{})
    // this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values('poivron',2,'u')",{})
    // this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values('lait',1,'l')",{})
    // this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values('crevette',3,'kg')",{})
    // this.db.executeSql("INSERT INTO `frigo` (name,quantite,unite) values('chocolat',300,'g')",{})

  public getAllIngredients(): Promise<string[]>{
    return this.db.executeSql('SELECT name FROM `frigo`',{})
    .then((data) =>{
      console.log(data);
      if(data == null) {
        return;
      }
      let ingredient: string[] = [];
      if(data.rows) {
        if(data.rows.length > 0) {
          for(var i = 0; i <data.rows.length; i++) {
            ingredient.push(data.rows.item[i]);
          }
        }
        return ingredient;
    }
    })
    .catch(e => {return null; })
  }

  public setIngredients(){

    this.db.executeSql("UPDATE `frigo` set name = 'uuu',quantite= 1,unite='u' where name=",{})
    .then(() => console.log('ingredient update in fridge'))
    .catch(e => console.log(e))
  }
}
