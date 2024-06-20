var names=new Array();
names[0]="Yaakov";
names[1]="Jagath";
names[2]="Juliyana";
names[3]="Piyath";
names[4]="Jambu";
names[5]="Sugath";
names[6]="Wimal";
names[7]="Harsha";
names[8]="kamal";
names[9]="jone";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}