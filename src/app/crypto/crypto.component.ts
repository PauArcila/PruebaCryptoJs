//27may21 - obtenido de: https://techclub.tajamar.es/encriptar-desencriptar-con-angular/
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  encTexto: string;
  desTexto: string;
  encPass: string;
  desPass: string;
  textoEncriptado: string;
  textoDesencriptado: string;
  constructor() { }



  convertirTexto(conversion: string) {
    if (conversion === 'encriptar') {
      this.textoEncriptado = CryptoJS.AES.encrypt(this.encTexto.trim(), this.encPass.trim()).toString();
    } else {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.desTexto.trim(), this.desPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }

  ngOnInit(): void {
    this.convertirTexto;
  }

}