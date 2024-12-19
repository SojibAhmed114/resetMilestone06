function yourTime(){
  let count = 0;
  return function (){
    count++;
    return count;
  }

}

const timeOne = yourTime();
timeOne()
