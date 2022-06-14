import { Queue } from "./Queue";
import { Stack } from "./Stack";

let stack=new Stack<string>();
let queue=new Queue<string>();

let arr='able was I ere I saw elba'
for(let i=0;i<arr.length;i++){
    stack.push(arr[i]);
    queue.enqueue(arr[i]);
}
let flag=1;
for(let i=0;i<arr.length;i++){
    if(stack.pop()!==queue.dequeue()){
        flag=-1;
        break;
    }
}
if(flag==1){
    console.log('chuỗi đối xứng');
}else{
    console.log('chuỗi không đối xứng');
    
}


