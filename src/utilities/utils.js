const required = () => { throw new Error("Missing parameter"); }

export function getItemFromLocalStorage(key = required()) {  
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      return false
    }

    return JSON.parse(item);
  } catch (e) {
    return false;
  }
}

export function setItemToLocalStorage(key = required(), value = required()) {
  try {
    deleteItemFromLocalStorage(key);
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch(e) {
    return false;
  }
}

export function deleteItemFromLocalStorage(key = required()) {
  if (getItemFromLocalStorage(key)) {
    localStorage.removeItem(key);
    return true;
  }

  return false;
}