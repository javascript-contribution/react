import { User, UserInfo } from "firebase/auth";
// Types for firebase authentication
export enum USER_ACTION_TYPES {
    SET_CURRENT_USER = 'user/SET_CURRENT_USER',
    CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILED = 'user/SIGN_IN_FAILED',
    SIGN_UP_START = 'user/SIGN_UP_START',
    SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS',
    SIGN_UP_FAILED = 'user/SIGN_UP_FAILED',
    SIGN_OUT_START = 'user/SIGN_OUT_START',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILED = 'user/SIGN_OUT_FAILED',
  };

  // export type UserData = {
  //   createdAt: Date;
  //   displayName: string;
  //   email: string;
  //   phoneNumber: Number;
   
  // };
  
  export type AdditionalInformation = {
    displayName?: string;
  };
  
  export type ObjectToAdd = {
    title : string;
  }

  // Types for redux
  export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
  };
  
  export type Action<T> = {
    type: T;
  };

  
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;



export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserInfo
>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserInfo
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

