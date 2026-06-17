// about.component.ts:

import { Component, ChangeDetectionStrategy } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about.scss',
})

export class About {

}
