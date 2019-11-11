
export function requestSuccessFunc (requestObj) {
  console.log('requestSuccess')
  return requestObj
}

export function requestFailFunc (requestError) {
  console.log('requestFail')
  return requestError
}

export function responseSuccessFunc (responseObj) {
  console.log('responseSuccess')
  return responseObj
}

export function responseFailFunc (responseError) {
  console.log('responseFail')
  return responseError
}
