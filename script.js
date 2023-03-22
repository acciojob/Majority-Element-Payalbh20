function majority(){
	let max =0, count=0;
	for(let i=0; i<num.length; i++){
		if(count ==0)max =num[i];//2,
		if(nums[i]== max) count ++; //1
		else count --;
	}
	//return max;
	console.log(max);
}
majority();