const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  NO_DATA_FOUND: {
    error: {
      code: 'NO_DATA_FOUND',
      msg: 'Data not found'
    }
  },
  INVALID_DATA: (e) => ({
    error: {
      code: 'INVALID_DATA',
      msg: 'Values submitted may be invalid!',
      ...(!isProduction ? {e} : {})
    }
  }),
  ERROR_500: (e) => ({
    error: {
      code: 'ERROR_500',
      msg: 'Something went wrong. Please try again',
      ...(!isProduction ? {e} : {})
    }
  }),
  LIMIT_REACHED: {
    error: {
      code: 'LIMIT_REACHED',
      msg: 'Limit reached!'
    }
  },
  UNAUTHORISED:{
    error: {
      code: 'UNAUTHORISED',
      msg: 'You are not authorised to perform this action!'
    }
  },
  NO_X_API_TOKEN: {
    error: {
      code: 'NO_X_API_TOKEN',
      msg: 'Invalid or No X-API Key provided!'
    }
  },
};