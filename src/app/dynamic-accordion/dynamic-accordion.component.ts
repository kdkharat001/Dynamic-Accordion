import { Component } from '@angular/core';

interface Section {
  header: string;
  details: string;
}

@Component({
  selector: 'app-dynamic-accordion',
  templateUrl: './dynamic-accordion.component.html',
  styleUrls: ['./dynamic-accordion.component.css']
})
export class DynamicAccordionComponent {
  sections: Section[] = [
    {
      header: 'Section 1',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  newSectionHeader = '';
  newSectionDetails = '';

  addSection(): void {
    if (this.newSectionHeader.trim()) {
      this.sections.push({
        header: this.newSectionHeader,
        details: this.newSectionDetails
      });
      this.newSectionHeader = '';
      this.newSectionDetails = '';
    }
  }

  removeSection(index: number): void {
    this.sections.splice(index, 1);
  }
}