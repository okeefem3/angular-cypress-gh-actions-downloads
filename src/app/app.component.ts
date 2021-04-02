import { Component, Renderer2 } from '@angular/core';
import * as json2csv from 'json2csv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private renderer: Renderer2) { }


  downloadFile(): void {
    const fileType = 'text/csv;charset=utf-8;';
    const data = this.createCsvData();
    const fileData = new Blob([data], { type: fileType });

    const anchor = this.renderer.createElement('a');
    this.renderer.setStyle(anchor, 'visibility', 'hidden');
    this.renderer.setAttribute(anchor, 'href', window.URL.createObjectURL(fileData));
    this.renderer.setAttribute(anchor, 'download', 'My Data.csv');

    // In FF link must be added to DOM to be clicked
    document.body.appendChild(anchor);

    setTimeout(() => {
      anchor.click();
      anchor.remove();
    }, 5);
  }

  createCsvData(): any {
    const fields: any[] = [
      { label: 'Year', value: 'year' },
      { label: 'ID', value: 'id' },
    ];

    const data = [
      { year: 2020, id: '123456789' },
      { year: 2020, id: '123456780' },
      { year: 2020, id: '123456788' },
      { year: 2020, id: '123456787' },
    ];

    return json2csv.parse(data, {
      fields,
      header: true,
    });
  }
}
