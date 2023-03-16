import { toast } from "react-toastify";

export function isText(name) {
  if (typeof name !== "undefined") {
    return name.trim() !== "" && !name.match(/[0-9]/gm);
  } else {
    return false;
  }
}

export function isPassword(password) {
  if (typeof password !== "undefined") {
    return password.toLowerCase() !== password && password.length >= 8;
  } else {
    return false;
  }
}

export function isEmail(email) {
  if (typeof email !== "undefined") {
    return email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
      ? true
      : false;
  } else {
    return false;
  }
}

export function isDate(date) {
  if (typeof date !== "undefined") {
    return true;
  } else {
    return false;
  }
}

export function isPhone(tel) {
  if (typeof tel !== "undefined") {
    return tel.match(
      /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?/
    );
  }
}

export function isSelect(defaultValue, selected) {
  if (defaultValue === selected) return false;
  return true;
}

const valueWithCheck = {
  name: isText,
  email: isEmail,
  password: isPassword,
  phone: isPhone,
  select: isSelect,
  date: isDate,
};

export function verifForm(field) {
  let result = true;
  let error = [];

  Object.keys(field).forEach((elm) => {
    if (!!field.elm || !valueWithCheck[elm](field[elm])) {
      result = false;
      error.push(elm);
    }
  });

  return { success: result, error };
}

export function generateToast(text, type = "error", position = "top-right") {
  toast[type](text, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
