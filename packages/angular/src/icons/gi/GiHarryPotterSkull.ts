import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-harry-potter-skull",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHarryPotterSkull {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256.16 15.82c-74.68 0-124.82 36.29-157.86 90.49C66.36 158.69 51.64 228.05 50.68 294.95c44.44 12.8 73.83 28.68 90.46 50.12 15.8 20.38 18.45 45.19 12.16 71.96 23.64 7.22 62.83 11.32 100.99 10.91 38.28-0.42 76.21-5.67 96.37-13.44-4.61-25.94-0.18-50.21 16.98-70.07 17.93-20.74 48.2-36.53 93.4-49.49-0.97-63.41-15.24-132.69-46.87-185.92-20.37-34.28-47.39-61.94-82.97-77.97-62.55 14.35-113.23 45-143.62 84.12 25.38 8.96 46.09 21.59 65.35 34.58l10.74 7.24-10.27 7.91c-26.88 20.71-46.28 43.71-65.26 67.48 28.47 22.27 47.56 52.2 29.02 65.19-33.57 23.52-170.71 1.4-119-78.75 6.01-9.31 15.31-13.31 26.2-13.5 14.64-0.24 32.14 6.41 48.4 16.37 17.11-21.45 35.2-43.14 59.1-63.32-18.54-11.88-37.98-22.42-61.97-29.26l-12.29-3.5 7.07-10.65c28.18-42.48 75.74-75.73 134.61-94.52-13.36-3.01-27.71-4.61-43.12-4.61h0zm126.59 189.5c10.890.18 20.19 4.19 26.2 13.5 51.71 80.15-85.43 102.27-119 78.75-31.5-22.06 45.6-93.04 92.8-92.25zM252.2 309.06c13.92 0 38.53 68.05 30.28 79.51-6.48 9-54.93 8.62-60.55 0-7.2-11.03 16.31-79.51 30.28-79.51zM354.71 433.13c-10.56 3.91-23.22 6.83-37.17 8.95l5.94 48.89h53.42l-22.18-57.84zm-207.89 1.57l-18.5 56.27h47.09l5.91-48.68c-12.76-1.88-24.48-4.38-34.51-7.59zm152.17 9.67c-13.13 1.28-27 1.98-41.08 2.21v44.4h46.74l-5.66-46.61zm-99.110.14l-5.65 46.47h44.99V446.6c-13.44-0.2-26.71-0.89-39.34-2.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHarryPotterSkull;
