/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
let collator = new Intl.Collator(['ru', 'en'], {caseFirst:"upper"});
let newArr = [];
newArr = newArr.concat(arr);
if(param === 'asc') {
  newArr.sort(function(a,b){
   return collator.compare(a,b);
 })
} else {
  newArr.sort(function(a,b){
   return collator.compare(b,a);
  })
 }
 return newArr;
}
