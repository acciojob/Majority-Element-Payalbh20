function major(arr)
{
  //your code here
	const nums = {};
const result = majorityElement(nums);
console.log(result); // Output: 2

function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
}
   let reqF = Math.floor(arr.length/ 2);
        let freq = {};

        for(let i = 0; i< arr.length; i++){
                if(!freq[arr[i]] ){
                        freq[arr[i]] = 1;
                }else{
                        freq[arr[i]] = freq[arr[i]] +1;
                }
                if(freq[arr[i]] > reqF){
                        return arr[i];
                }
                
        }
        return -1;
}
module.exports=major;