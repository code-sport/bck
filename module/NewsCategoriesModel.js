import {Constants, SQLite} from 'expo';

const {manifest} = Constants;
const db = SQLite.openDatabase('bck_'+manifest.version+'.db');
let init = false;
let loadedData = false;
export class NewsCategoriesModel {
  static myInstance = null;

  constructor() {
    if (!init && !loadedData) {
      this.initDb();
    }
  }

  static getInstance() {
    if (NewsCategoriesModel.myInstance == null) {
      NewsCategoriesModel.myInstance = new NewsCategoriesModel();
    }
    return this.myInstance;
  }

  initDb = () => {
    db.transaction(tx => {
        tx.executeSql('create table if not exists newscategories (id integer primary key not null, name text, disabled int);');
        console.debug('DB Init done');
        init = true;
        this.loadData();
      },
      error => console.error(error)
    );
  };

  loadData = () => {
    let url = 'http://www.budoclubkarlsruhe.de/wp-json/wp/v2/categories';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        loadedData = true;
        responseJson.forEach((item) => {
          db.transaction(
            tx => {
              tx.executeSql('insert or replace into newscategories (id, name) values (?, ?)', [item.id, item.name]);
            },
            error => console.error(error)
          );
        });
      }).catch((error) => {
        console.error(error);
      });
  };

  getItem = (id) => {
    return new Promise((data) => this.executeSql('select id, name from newscategories where id = ?', [id])
      .then(rows => {
        data(rows[0]);
      }), error => console.error(error));
  };

  getItems = () => {
    if (!init && !loadedData) {
      this.initDb();
    }
    return new Promise((data) => this.executeSql('select id, name, disabled from newscategories', [])
      .then(rows => {
        data(rows);
      }), error => console.error(error));
  };

  executeSql = async (sql, params = []) => {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(sql, params, (_, {rows}) => resolve(rows._array), reject)
    }))
  };
}
