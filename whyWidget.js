//把Object變成array
arrFromObj=function(myObj){
	arr=new Array();

	for (key in myObj) {
		arr.push(myObj[key]);
	};
	return arr;
}

//99-->"1999", 100-->"2000", 113-->"2013"
ad=function(numYear){
	if(Math.floor(numYear/100)==1){
		return "20"+numYear.toString().substr(1);
	}else{
		return "19"+numYear.toString();
	}

}

//傳回下個月一號的date物件
nextMonthFirstDay=function(strDate){
	date=new Date(strDate);
	year=date.getYear();
	month=date.getMonth();
	if(month==11){
		year+=1;
		month=1;
	}
	else{
		month+=2;
	}
	return new Date(ad(year)+"/"+month+"/1");
}

//傳回下一季一號的date物件
nextSeasonFirstDay=function(strDate){
	date=new Date(strDate);
	year=date.getYear();
	month=date.getMonth();
	if(month<=8){
		month=3*(Math.floor(month/3))+4;
	}else{
		month=1;
		year+=1;
	}
	return new Date(ad(year)+"/"+month+"/1");

}