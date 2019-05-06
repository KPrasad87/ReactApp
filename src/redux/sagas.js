import { put, takeLatest, all } from 'redux-saga/effects';



    function* fetchNews() {
    const json = yield fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json(), );  
  
    yield put({ type: "Decrement", data:json.data});
    }

function* actionWatcher() {
    yield takeLatest('Increment', fetchNews)
}
export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }
 



 



  










  
