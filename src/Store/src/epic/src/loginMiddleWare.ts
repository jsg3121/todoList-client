import { Action } from "redux";
import { Epic } from "redux-observable";
import { from } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { addUserService } from "../../../../service";
import { accountActions, addNewAccount, newAccount } from "../../action/src/account.action";

type Actions = typeof accountActions;

const newAccountEpic: Epic<Action<Actions>, Action<any>, void, any> = (action$) => {
  return action$.pipe(
    filter(newAccount.match),
    switchMap((data) => from(addUserService(data.payload)).pipe(map(() => addNewAccount())))
  );
};

export default newAccountEpic;
