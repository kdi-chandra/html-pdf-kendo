import { Component, OnInit } from '@angular/core';
import {
  drawDOM,
  exportPDF,
  DrawOptions,
  Group,
} from "@progress/kendo-drawing";
import { saveAs } from "@progress/kendo-file-saver";

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.scss']
})
export class PdfGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  useKendoUI(): void {
    const pdfContent = document.getElementById("pdf-content");

    drawDOM(pdfContent)
    .then((group: Group) => {
      return exportPDF(group);
    })
    .then((dataUri) => {
      saveAs(dataUri, "export.pdf");
    });
  }
}
