import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lighter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLighter {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M128.53 24.51L41.26 79.22c-4.24 2.66-7.89 8.22-9.34 14.55-1.45 6.32-0.59 12.92 2.07 17.16l93.48 149.12c2.66 4.24 8.22 7.89 14.54 9.34 6.32 1.45 12.920.59 17.16-2.06l87.27-54.7-117.91-188.1zm306.970.19c32.33 85.82-99.89 67.29-83.39 116.67l24.79 8.48c39.2-6.48 60.51-25.84 27.74-39.1 35.64-7.75 50.04 25.38 25.48 48.38-2.64 2.47-5.25 4.53-7.83 6.25l15.92 5.45c65.99-10.82 47.48-101.74-2.71-146.13zm-92.78 132.48l-4.53 13.25 21.76 7.45-5.83 17.03-21.76-7.44-9.71 28.39 88.94 30.43 4.53-13.25-21.76-7.44 5.83-17.03 21.76 7.45 9.71-28.38-88.94-30.43zm-60.83 21.92a32 32 0 0 0-26.9 13.27l8.74 13.95 17.54-4.63 24.34 8.33 4.28-12.51a31.98 31.98 0 0 0-28-18.4zm161.26 30.51l-14.2 41.49a23.34 23.34 0 0 0 6.28 3.27c12.12 4.15 25.06-2.2 29.21-14.32 4.15-12.12-2.2-25.06-14.32-29.21a23.29 23.29 0 0 0-6.97-1.24zm-162.55 10.88l-24.4 6.45 201.1 68.81-15.34-20.05-161.37-55.21zm-34.7 21.95l-54.06 158.01c-1.62 4.73-0.95 11.35 1.9 17.18 2.85 5.82 7.68 10.41 12.41 12.03l166.52 56.98c4.73 1.62 11.350.95 17.18-1.91 5.82-2.85 10.41-7.68 12.03-12.41l54.06-158.01-210.04-71.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLighter;
