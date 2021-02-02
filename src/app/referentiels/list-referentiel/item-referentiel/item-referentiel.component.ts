import {Component, Input, OnInit} from '@angular/core';
import {Referentiel} from '../../../Models/referentiel.model';
import {RepositoryService} from '../../../repository.service';

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  base64Data: any;
  @Input() refs: Referentiel;
  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.base64Data = this._base64ToArrayBuffer(this.refs.programme);
    console.log(this.base64Data);
  }
  // tslint:disable-next-line:typedef
  _base64ToArrayBuffer(base64Data: any) {
    this.base64Data = base64Data;
    const binaryString = window.atob(this.base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
 /* getFile(): any{
    // @ts-ignore
    for (const ref of this.refs) {
      this.base64Data = ref.programme.fileContent;
      // const type =  ref.programme.split('.').pop();
      console.log(this.base64Data);
      if (ref.programme.fileType === 'pdf') {
        console.log('ok');
        const blob = new Blob([this.repoService._base64ToArrayBuffer(this.base64Data)], {
          type: 'application/doc'
        });
        const url = URL.createObjectURL(blob);
        ref.programme = window.open(url);
      }
    }
  }*/
}
