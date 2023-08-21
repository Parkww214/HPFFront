const BASE_PATH = {
  USERS: '/users',
  MYPAGES: '/mypages',
  RECIPE: '/recipe',
  CALENDAR: '/calendar',
  REFRIGERATOR: '/refrigerator',
};

const API_PATH = {
  LOGIN: `${BASE_PATH.USERS}/login`,
  LOGOUT: `${BASE_PATH.USERS}/logout`,
  SIGNUP: `${BASE_PATH.USERS}/signup`,
  WITHDRAWAL: `${BASE_PATH.USERS}/withdrawal`,
  FINDING: `${BASE_PATH.USERS}/finding`,
  CHECK_ID: `${BASE_PATH.USERS}/check/duplicate/id`,
  CHECK_NICKNAME: `${BASE_PATH.USERS}/check/duplicate/nickname`,
  CHECK_EMAIL: `${BASE_PATH.USERS}/check/duplicate/email`,
  CHANGE_PASSWORD: `${BASE_PATH.USERS}/password`,
  ALL_RECIPE: `${BASE_PATH.RECIPE}/`,
  RECENT_WATCHED_RECIPE: `${BASE_PATH.MYPAGES}/recent`,
  FAVORITE_RECIPE: `${BASE_PATH.RECIPE}/favorite`,
  DELETE_FAVORITE_RECIPE: `${BASE_PATH.RECIPE}/favorite/delete`,
  MY_REVIEW: `${BASE_PATH.MYPAGES}/review`,
  MY_RECIPE: `${BASE_PATH.USERS}/myrecipe`,
  POPULAR_RECIPE: `${BASE_PATH.RECIPE}/highest-star`,
  NEW_REVIEW: `${BASE_PATH.RECIPE}/review`,
  ADD_FAVORITE: `${BASE_PATH.RECIPE}/favorite`,
  CANCEL_FAVORITE: `${BASE_PATH.RECIPE}/favorite/delete`,
  DETAIL_RECIPE: `${BASE_PATH.RECIPE}/detail`,
  DETAIL_RECIPE_REVIEW: `${BASE_PATH.RECIPE}/review`,
  FAVORITE_RECIPE: `${BASE_PATH.MYPAGES}/favorite`,
  POSSIBLE_RECIPE: `${BASE_PATH.RECIPE}/possible`,
  SEARCH_RECIPE: `${BASE_PATH.RECIPE}/name`,
  WEEK_CALENDAR: `${BASE_PATH.CALENDAR}/week`,
  ADD_DIET_WITH_FAVORITE: `${BASE_PATH.CALENDAR}/week/favorite`,
  ADD_DIET_WITH_CUSTOM: `${BASE_PATH.CALENDAR}/week/self`,
  DELETE_DIET: `${BASE_PATH.CALENDAR}/week`,
  REFRIGERATOR: `${BASE_PATH.REFRIGERATOR}/inquire`,
  FILL_REFRIGERATOR: `${BASE_PATH.REFRIGERATOR}/fill`,
  EMPTY_REFRIGERATOR: `${BASE_PATH.REFRIGERATOR}/empty`,
  DELETE_MYREVIEW: `${BASE_PATH.MYPAGES}/review/delete`,
};

export { API_PATH };
