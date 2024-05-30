export  class DestinoViaje{
	selected: boolean;
	public servicios: string[];
	public id: string;

	constructor(public nombre:string, public u:string , public votes: number = 2){

	this.servicios = ["pileta","desayuno"];
	}

 	isSelected(): boolean{
		return this.selected;
	}
	setSelected(s: boolean) {
		this.selected =s;
		
	}
	voteUp()
	{
		console.log("llego hasta el model");
		this.votes=5;
		console.log("llego hasta el model");
	}
	voteDown()
	{
		this.votes--;
	}
}

