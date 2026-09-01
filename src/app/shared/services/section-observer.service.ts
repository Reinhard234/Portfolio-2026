import { Injectable, signal } from '@angular/core';

type Visibility = 'hidden' | 'visible';
type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class SectionObserverService {
  activeSection = signal<string>('hero');
  isHidden = signal<boolean>(true);
  isDarkMode = signal<boolean>(true);

  private hideShowMap: Record<string, Visibility> = {
    hero: 'hidden',
    projects: 'visible',
    skills: 'visible',
    experience: 'visible',
  };

  private lightDarkMap: Record<string, Theme> = {
    hero: 'dark',
    projects: 'light',
    skills: 'light',
    experience: 'dark',
  };

  private sectionIds: string[] = [];
  private ticking = false;
  private boundScrollListener = () => this.onScroll();

  observe(ids: string[]) {
    this.sectionIds = ids;
    window.addEventListener('scroll', this.boundScrollListener, {
      passive: true,
    });
    this.updateActiveSection(); // run once immediately for initial state
  }

  private onScroll() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.updateActiveSection();
      this.ticking = false;
    });
  }

  private updateActiveSection() {
    const referenceLine = window.innerHeight * 0.05;
    let currentId = this.sectionIds[0];

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= referenceLine) {
        currentId = id;
      } else {
        break;
      }
    }

    if (currentId !== this.activeSection()) {
      this.activeSection.set(currentId);
      this.isHidden.set(this.hideShowMap[currentId] === 'hidden');
      this.isDarkMode.set(this.lightDarkMap[currentId] === 'dark');
    }
  }

  scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  disconnect() {
    window.removeEventListener('scroll', this.boundScrollListener);
  }
}
