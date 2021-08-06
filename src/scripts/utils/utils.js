const capital = (message) => {
  const phrase = message;
  const capitalStr = phrase.charAt(0).toUpperCase() + phrase.slice(1);
  return capitalStr;
};

const cleanString = (message) => {
  message = message.replace('\n', ' ');
  message = message.replace('\f', ' ');
  return message;
};

const countElements = ((list) => {
  if (list === undefined || list === null || list.length === undefined || !Array.isArray(list)) {
    throw new Error('Invalid list');
  }
  return list.length;
});

export { capital, cleanString, countElements };
