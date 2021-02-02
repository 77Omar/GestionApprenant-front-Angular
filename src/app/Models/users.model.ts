import {Deserializable} from './deserializable.interface';


export class Users implements Deserializable{
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: any;
  password: string;
  profil: number;
  path: any;
  // tslint:disable-next-line:variable-name
  _method: any;


  // tslint:disable-next-line:variable-name max-line-length
  constructor( firstName: string, lastName: string, email: string, avatar: any, password: string, profil: number, path: any , _method: any, id?: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.avatar = avatar;
    this.password = password;
    this.profil = profil;
    this.path = path;
    this._method = _method;
  }

  deserializable(input: any): this {
      Object.assign(this, input);
      return this;
  }

}

