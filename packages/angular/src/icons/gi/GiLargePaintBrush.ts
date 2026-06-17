import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-large-paint-brush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLargePaintBrush {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.02 20.02c-1.41 1.41-2.87 4.94-1.4 12.86 1.47 7.92 5.95 19.18 14.07 32.72l0.080.120.070.13c36.07 64.77 100.54 100.05 156.89 156.41 3.54 3.54 4.69 8.14 4.86 12.20.17 4.06-0.52 8.04-1.65 12.23-2.25 8.38-6.39 17.64-11.55 27.22-8.69 16.13-20.09 32.62-30.88 44.9l10.23 10.23 168.29-168.29-10.23-10.23c-12.28 10.79-28.77 22.2-44.9 30.88-9.58 5.16-18.83 9.3-27.21 11.55-4.19 1.12-8.17 1.82-12.23 1.65-4.06-0.17-8.67-1.32-12.2-4.86-53.66-53.66-81.95-115.66-156.39-156.88l-0.14-0.08-0.13-0.08c-13.54-8.12-24.8-12.6-32.72-14.07-7.92-1.47-11.44-0.01-12.86 1.4zm27.58 27.58A32 16 45 0 1 81.54 58.91 32 16 45 0 1 92.85 92.85a32 16 45 0 1-33.94-11.31 32 16 45 0 1-11.31-33.94zm125.87 294.16l9.9 9.9L351.65 183.36l-9.9-9.9zm22.63 22.63l9.9 9.9 168.29-168.29-9.9-9.9zm22.53 22.72c21.7 21.84 56.45 58.78 71.3 106.89l18.94-18.94c0.26-11.26-0.09-21.74-1.05-31.48 5.23 4.6 10.04 11.4 14.27 18.26l25.8-25.79c-4.58-9.17-10.8-17.05-16.32-25.49 8.74 5.2 17.67 10.21 25.48 16.33l40.65-40.65c-6.68-2.41-12.95-6.32-19.07-10.8 9.83 1.6 20.110.93 30.59-0.72l25.66-25.66c-3.61-10.32-7.61-20.26-13.05-28.76 11.27 2.37 19.41 8.29 27.16 14.65l19.88-19.88c-3.56-2.77-6.36-6.46-9.12-14.08 6.66 3.66 13.23 3.98 19.93 3.27l14.34-14.34c-48.11-14.86-85.05-49.6-106.89-71.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLargePaintBrush;
