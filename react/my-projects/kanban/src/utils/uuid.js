const getUniqueKey = (elementName) => {
  return elementName + Math.random() * 2 + "" + Date.now();
};

export { getUniqueKey };
