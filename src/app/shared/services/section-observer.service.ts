import { Injectable, signal } from '@angular/core';

type Visibility = 'hidden' | 'visible';

@Injectable({ providedIn: 'root' })
export class SectionObserverService {
  activeSection = signal<string>('hero');
  isHidden = signal<boolean>(true);

  private hideShowMap: Record<string, Visibility> = {
    hero: 'hidden',
    projects: 'visible',
    skills: 'visible',
    experience: 'visible',
  };

  private observer?: IntersectionObserver;

  observe(ids: string[]) {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            this.activeSection.set(id);
            this.isHidden.set(this.hideShowMap[id] === 'hidden');
          }
        }
      },
      { threshold: 0, rootMargin: '-50% 0px -50% 0px' },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  disconnect() {
    this.observer?.disconnect();
  }
}
