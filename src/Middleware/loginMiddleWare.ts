const loginMiddleWare = (store: any) => (next: any) => (action: any) => {
  console.group(action && action.type); //action 타입으로 log를 그룹화함
  console.log("이전 상태", store.getState());
  console.log("액션", action);

  if (action.type === "loginModule/LOGIN") {
    console.log("로그인 모듈 실행");
  }

  next(action); //다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState());
  console.groupEnd(); //그룹 끝
};

export default loginMiddleWare;