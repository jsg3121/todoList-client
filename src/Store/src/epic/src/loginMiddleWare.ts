import { Action } from "redux";
import { Epic } from "redux-observable";
import { from } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { addUserService, newAccountIdCheck, loginAccountCheck } from "../../../../service";
import { accountActions, loginComplate, login, newAccount } from "../../action/src/account.action";

type Actions = typeof accountActions;

const newAccountEpic: Epic<Action<Actions>, Action<any>, void, any> = (action$) => {
  return action$.pipe(
    filter(newAccount.match),
    switchMap((data) => from(newAccountIdCheck(data.payload))),
    switchMap((data) => from(addUserService(data))),
    map(() => loginComplate())
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

export { newAccountEpic, loginAccountEpic };
