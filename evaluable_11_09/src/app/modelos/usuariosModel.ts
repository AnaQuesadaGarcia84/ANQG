export class Usuario{
	static _id: string;
	constructor(
		public _id: string,
		public name: string,
		public apellidos: string,
		public fNacimiento: string,
		public email: string,
		public telefono: string,
		public foto: string,
        public password: string,
        public tipo: boolean,
        public fechaRegistro: string,
        public anotaciones: string,
	){}
}