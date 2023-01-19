function major(arr)
{
  //your code here
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