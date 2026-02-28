//home.ts:

import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {ROUTE_LINKS} from '../../Shared/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ]
})

export class Home implements AfterViewInit {

  private percentageSpans: HTMLElement[] = [];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const bars: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.index-about-skill-bar-fill');

    bars.forEach((bar) => {
      let percentage = bar.style.width;

      if (!percentage) {
        const computedWidth = getComputedStyle(bar).width;
        const parentWidth = bar.parentElement!.clientWidth;
        percentage =
          ((parseFloat(computedWidth) / parentWidth) * 100).toFixed(0) + '%';
      }

      const text = document.createElement('span');
      text.textContent = percentage;
      text.style.color = '#fff';
      text.style.fontSize = '1.8rem';
      text.style.position = 'relative';
      text.style.bottom = '5px';

      bar.appendChild(text);
      this.percentageSpans.push(text);
    });

    this.updateTextPosition(); // set initial position
  }
  @HostListener('window:resize')
  onResize() {
    this.updateTextPosition();
  }

  private updateTextPosition() {
    const isMobile = window.innerWidth < 600;

    this.percentageSpans.forEach(text => {
      text.style.left = isMobile ? '120px' : '350px';
    });
  }

  protected readonly ROUTE_LINKS = ROUTE_LINKS;
}
