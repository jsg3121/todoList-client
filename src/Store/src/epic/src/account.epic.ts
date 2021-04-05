import { Action } from "redux";
import { Epic } from "redux-observable";
import { from } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { addUserService, loginAccountCheck, newAccountIdCheck } from "../../../../Service";
import { accountActions, checkNewAccountId, finishCheck, login, loginComplate, newAccount } from "../../action/src/account.action";

type Actions = typeof accountActions;

const newAccountEpic: Epic<Action<Actions>, Action<any>, void, any> = (action$) => {
  return action$.pipe(
    filter(newAccount.match),
    switchMap((data) => from(addUserService(data.payload))),
    map(() => loginComplate())
  );
};

const checkNewAccountEpic: Epic<Action<Actions>, Action<any>, void, any> = (action$) => {
  return action$.pipe(
    filter(checkNewAccountId.match),
    switchMap((data) => from(newAccountIdCheck(data.payload))),
    map((data) => finishCheck(data))
  );
};

const loginAccountEpic: Epic<Action<Actions>, Action<any>, void, any> = (action$) => {
  return action$.pipe(
    filter(login.match),
    map((data) => {
      return loginAccountCheck(data.payload);
    }),
    map(() => loginComplate())
  );
};

export { newAccountEpic, loginAccountEpic, checkNewAccountEpic };
