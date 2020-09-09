/*Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!*/

function nextId(ids){
  const arr = ids.filter((item, pos, self) => self.indexOf(item) === pos).sort((x, y) => x-y);

  if(arr[0] !== 0) {
    return 0;
  }

  for(let i = 0, j = 1; i <= arr.length; i += 1, j += 1) {
    if(arr[i]-arr[j] !== -1) {
      return arr[i]+=1;
    }
  }
}
