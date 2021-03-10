import SQLite from 'react-native-sqlite-storage';
import { creataMessagesTableSQLStatement } from './SQLStatements';

export const openDatabase = (): void => {
  global.sqlite = SQLite.openDatabase(
    { name: 'awesome', location: 'default' },
    () => console.log('Awesome databaase opened successfully'),
    (e) => console.log('Error creating awesome database'),
  );
};

export const createDatabase = (
  sql: string = creataMessagesTableSQLStatement,
  params: string[] = [],
) =>
  new Promise((resolve, reject) => {
    global.sqlite.transaction((transaction) => {
      transaction.executeSql(
        sql,
        params,
        (transaction, results) => {
          resolve(results);
        },
        (error) => {
          reject(error);
        },
      );
    });
  });
