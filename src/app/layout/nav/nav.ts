import {Component, Inject, PLATFORM_ID, Renderer2, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {HlmNavigationMenuImports} from '@spartan-ng/helm/navigation-menu';
import {HlmButtonImports} from '@spartan-ng/helm/button';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {lucideSun, lucideMoon, lucideLanguages} from '@ng-icons/lucide';
import {HlmIcon} from '@spartan-ng/helm/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    HlmNavigationMenuImports,
    HlmButtonImports,
    NgIcon,
    HlmIcon,
  ],
  providers: [provideIcons({lucideSun, lucideMoon, lucideLanguages})],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  public readonly isDark = signal(false);

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDark.set(document.documentElement.classList.contains('dark'));
    }
  }

  toggleTheme() {
    this.isDark.set(!this.isDark());
    if (this.isDark()) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
}
