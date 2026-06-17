//home.ts:

import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {ROUTE_LINKS, WORKPAGE_LINKS} from '../../shared/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    RouterLink,
    NgOptimizedImage
  ]
})

export class Home {

  // quoteList = [
  //   {
  //     quote: "The more that you read, the more<br>things you will know. " +
  //       "The more that<br>you learn, the more places you'll go.",
  //     quotee: "Dr. Seuss"
  //   },
  //   {
  //     quote: "For the best return on your<br>money, pour your purse<br>into your head.",
  //     quotee: "Benjamin Franklin"}
  // ];

  quoteList = [
    {
      lines: [
        "The more that you read, the more",
        "things you will know. The more that",
        "you learn, the more places you'll go."
      ],
      quotee: "Dr. Seuss"
    },
    {
      lines: [
        "For the best return on your",
        "money, pour your purse",
        "into your head."
      ],
      quotee: "Benjamin Franklin"
    }
  ];

  skills = [
    { name: 'Angular & TypeScript', percent: 50 },
    { name: 'C# (C-Sharp)', percent: 45 },
    { name: 'CSS, LESS, & SCSS', percent: 80 },
    { name: 'HTML', percent: 80 },
    { name: 'Java', percent: 50 },
    { name: 'JavaScript', percent: 75 },
    { name: 'JFX', percent: 50 },
    { name: 'JSON', percent: 60 },
    { name: 'PHP & SQL', percent: 65 },
    { name: 'Python', percent: 90 },
    { name: 'Unity Essentials', percent: 75 },
    { name: 'Writing', percent: 88 },
    { name: 'XML', percent: 80 }
  ];

  protected readonly ROUTE_LINKS = ROUTE_LINKS;
  protected readonly WORKPAGE_LINKS = WORKPAGE_LINKS;
}

// - − – —
