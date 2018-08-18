import {SQLite} from 'expo';

const db = SQLite.openDatabase('bck.db');
var init = false;

export class NewsCategoriesModel {
  constructor() {
    db.transaction(tx => {
        tx.executeSql('create table if not exists newscategories (id integer primary key not null, name text);');
        if (!init) {
          console.debug('DB Init done');
          init = true;
          this.loadData();
        }
      },
      error => console.error(error)
    );
  }

  loadData = () => {
    let url = 'http://www.budoclubkarlsruhe.de/wp-json/wp/v2/categories';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
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

  executeSql = async (sql, params = []) => {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(sql, params, (_, {rows}) => resolve(rows._array), reject)
    }))
  };
}
