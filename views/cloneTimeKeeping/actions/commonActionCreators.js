export const toSuccessAction = (actionType, payload) => {
  return {
    type: toSuccessActionType(actionType),
    payload: payload,
  };
};

export const toSuccessActionType = actionType => 'SUCCESS_' + actionType;
