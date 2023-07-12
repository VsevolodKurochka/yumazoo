export const VALIDATORS = {
  REQUIRED: 'required'
}

const validatorMessages = {
  [VALIDATORS.REQUIRED]: 'Is required.'
}

const validatorRules = {
  [VALIDATORS.REQUIRED]: (value) => value === '',
}

export const initFormValidation = (fields) => Object.keys(fields).map((field) => {
  const value = fields[field].value;
  const validators = fields[field]?.validators || null;

  return {
    field,
    errors: validators ? validators.map((validator) => ({
      validator,
      result: validatorRules[validator](value),
      message: validatorMessages[validator],
    })) : false
  };
})