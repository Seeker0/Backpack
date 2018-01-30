import validate from "validate.js";

export function getColorFromError(error) {
  return !!error ? "danger" : "default";
}

export function isEmpty(object) {
  return Object.keys(object).length === 0;
}

const formConstraints = {
  username: {
    presence: true,
    length: { minimum: 6 }
  },
  password: {
    presence: true,
    length: { minimum: 8 }
  }
};

export function validateForm(formData) {
  return validate(formData, formConstraints);
}
