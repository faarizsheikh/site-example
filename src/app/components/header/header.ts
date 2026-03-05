// header.ts:

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {class_prefix, NavItem, ROUTE_LINKS, ROUTE_LINKS_ARRAY, SOCIAL_LINKS} from '../../Shared/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly ROUTE_LINKS = ROUTE_LINKS;

  @ViewChild('video') videoPlayer?: ElementRef<HTMLVideoElement>;

  playVideo() {
    const video = this.videoPlayer?.nativeElement;

    if (!video) return;

    video.currentTime = 0;

    video.play().catch(() => {
      // silent fail if autoplay blocked (should not happen with muted)
    });
  }

  pauseVideo() {
    const video = this.videoPlayer?.nativeElement;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }

  protected readonly ROUTE_LINKS_ARRAY: NavItem[] = ROUTE_LINKS_ARRAY;
  protected readonly SOCIAL_LINKS = SOCIAL_LINKS;
  protected readonly class_prefix = class_prefix;
}
