// header.component.ts:

import {NgOptimizedImage} from '@angular/common';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ROUTE_LINKS} from '../../Shared/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header implements AfterViewInit {
  @ViewChild('kdpContainer') kdpContainer!: ElementRef<HTMLDivElement>;

  private video!: HTMLVideoElement;
  private resetTimeout: any;

  ngAfterViewInit(): void {

    const container = this.kdpContainer.nativeElement;

    this.video = document.createElement('video');

    this.video.src = 'assets/Videos/book-flip.mp4';
    this.video.loop = true;
    this.video.muted = true;
    this.video.playsInline = true;

    this.video.style.position = 'absolute';
    this.video.style.top = '0';
    this.video.style.left = '0';
    this.video.style.width = '100%';
    this.video.style.height = '100%';
    this.video.style.objectFit = 'cover';

    this.video.style.opacity = '0';
    this.video.style.transition = 'opacity 0.6s ease-in-out';
    this.video.style.pointerEvents = 'none';
    this.video.style.display = 'block';

    container.style.overflow = 'hidden';
    container.appendChild(this.video);

    container.addEventListener('mouseenter', () => {
      if (this.resetTimeout) {
        clearTimeout(this.resetTimeout);
        this.resetTimeout = null;
      }
      this.video.currentTime = 0;
      this.video.style.opacity = '1';
      this.video?.play();
    });

    container.addEventListener('mouseleave', () => {
      this.resetTimeout = setTimeout(() => {
        this.video.currentTime = 0;
        this.video.style.opacity = '0';
        this.video?.pause();
      }, 600);
    });
  }

  protected readonly ROUTE_LINKS = ROUTE_LINKS;
}
