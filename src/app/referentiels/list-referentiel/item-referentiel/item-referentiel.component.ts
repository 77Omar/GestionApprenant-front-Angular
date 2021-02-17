import {Component, Input, OnInit} from '@angular/core';
import {Referentiel} from '../../../Models/referentiel.model';
import {RepositoryService} from '../../../repository.service';
import {Router} from '@angular/router';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  @Input() refs: Referentiel;
  constructor(private repoService: RepositoryService, private router: Router) { }

  // @ts-ignore
  ngOnInit(): void {
  }


  b64toBlob(b64Data: any, contentType = 'application/pdf'): any {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  openProgramme(): any {
    const file = this.b64toBlob(this.refs.programme);
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }

  // tslint:disable-next-line:typedef
  EditButtonclick(uId: number){
    this.router.navigate(['/referentiels', uId]);
  }
 /*
  _base64ToArrayBuffer(base64Data: any) {
    this.base64Data = base64Data;
    const binaryString = window.atob(this.base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }/*
    return bytes.buffer;
  }
  */
}
