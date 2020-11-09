import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, bandera: boolean): unknown {
    let cadena = '';
    if(bandera){
      for(let i = 0; i<value.length; i++){
        cadena+='*';
      }
    }else{
      cadena = value;
    }
    return cadena;
  }

}
