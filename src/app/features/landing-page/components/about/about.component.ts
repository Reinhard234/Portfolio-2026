import {
  Component,
  ElementRef,
  inject,
  NgZone,
  ViewChild,
} from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @ViewChild('face', { static: true }) face!: ElementRef<HTMLImageElement>;

  private readonly zone = inject(NgZone);

  // 0 to 1: lower = more lag, 1 = no lag
  private readonly ease = window.matchMedia('(prefers-reduced-motion: reduce)')
    .matches
    ? 1
    : 0.08;

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private rafId: number | null = null;
  private snapNextMove = true;

  onMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.targetX = event.clientX - rect.left;
    this.targetY = event.clientY - rect.top;

    // on entry, jump straight to the mouse instead of flying in from the old position
    if (this.snapNextMove) {
      this.currentX = this.targetX;
      this.currentY = this.targetY;
      this.snapNextMove = false;
    }

    if (this.rafId === null) {
      // run the loop outside Angular so 60 frames a second don't trigger change detection
      this.zone.runOutsideAngular(() => {
        this.rafId = requestAnimationFrame(this.tick);
      });
    }
  }

  onLeave(): void {
    this.snapNextMove = true;
  }

  private tick = (): void => {
    const dx = this.targetX - this.currentX;
    const dy = this.targetY - this.currentY;

    this.currentX += dx * this.ease;
    this.currentY += dy * this.ease;

    this.face.nativeElement.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;

    // once it has caught up, stop looping until the mouse moves again
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      this.rafId = null;
      return;
    }

    this.rafId = requestAnimationFrame(this.tick);
  };

  ngOnDestroy(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }

  readonly bio =
    "I'm from sunny South Africa. A land of endless possibility and growth, but also of real pain and poverty. Navigating that contrast has shaped who I am: someone who cares deeply about the weight of every decision, big or small. That same care is what I bring into my work.";

  readonly tagline =
    "I'm a developer who turns hard problems into interfaces that feel simple.";

  readonly stats: Stat[] = [
    { value: '4+', label: 'years coding' },
    { value: '3', label: 'industries worked in' },
    { value: 'SCSS', label: 'guilty pleasure' },
    { value: '∞', label: 'cups of coffee' },
  ];
}
