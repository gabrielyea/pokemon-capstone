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

export { capital, cleanString };
