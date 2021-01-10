import React, { useEffect, useRef } from "react";
import { openDatabase } from "expo-sqlite";
const db = openDatabase("db.testDb");

const databaseInstance = {
  initDatabase: () => {
    return db.transaction(
      (trans) =>
        new Promise(
          (resolve, reject) => {
            trans.executeSql(
              "select * from sqlite_master",
              null,
              (txt, { rows: { length, _array } }) => {
                console.log("databse connected success");
                resolve("connected success");
              },
              (txt, error) => {
                console.log("database init error");
                reject("connected error");
              }
            );
          },
          (error) => {
            console.log("transaction error" + JSON.stringify(error));
            reject("connected error");
          }
        )
    );
  },
  executeQuery: (sqlStatement, callBack, params = null) => {
    return db.transaction((trans) =>
      trans.executeSql(
        sqlStatement,
        params,
        (txtObject, response) => {
          if (typeof callBack === "function") {
            console.log(response.rows._array);
            return callBack(response.rows._array);
          }

          console.log("success response" + JSON.stringify(response));
        },
        (txtObject, error) =>
          console.log("response error" + JSON.stringify(error))
      )
    );
  },
};

export default databaseInstance;
