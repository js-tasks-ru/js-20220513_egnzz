/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
const newObj = {...obj};

for(const field of fields) {
  if(fields.indexOf(field) >= 0) delete(newObj[field]);
 }
return newObj;
};
