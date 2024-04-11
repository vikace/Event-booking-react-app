export default function dateTimeParser(timestamp)
  {

    var dateArr=timestamp.split(" ")[0].split("-");
    var timeArr=timestamp.split(" ")[1].split(":");
    var temp=new Date(dateArr[0],dateArr[1],dateArr[2],timeArr[0],timeArr[1],timeArr[0],0);
    return [temp.toDateString(),temp.toLocaleTimeString()];
  }
  