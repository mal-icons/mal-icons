import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hbomax",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHbomax {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.78 8.72c-0.65 0-1.320.29-2.170.95v-0.78H0v6.24h1.72V11.24c0.75-0.59 1.09-0.78 1.37-0.780.33 0 0.550.210.550.73v3.93h1.72V11.23c0.75-0.58 1.08-0.77 1.37-0.770.33 0 0.550.210.550.73v3.93H8.99v-4.53c0-1.4-0.8-1.87-1.57-1.87-0.65 0-1.320.27-2.190.94-0.28-0.7-0.89-0.94-1.44-0.94zm8.69 0c-1.7 0-3.12 1.47-3.12 3.28 0 1.82 1.41 3.29 3.12 3.290.84 0 1.57-0.31 2.13-0.99v0.82h1.63V8.88h-1.63v0.82c-0.56-0.68-1.29-0.99-2.13-0.99zm4.060.17c0.71 1.1 1.51 2.09 2.44 3.08a26.59 26.59 0 0 0-2.44 3.16h2.07a13.6 13.6 0 0 1 1.67-2.18 14.07 14.07 0 0 1 1.63 2.18H24a25.14 25.14 0 0 0-2.43-3.16A23.92 23.92 0 0 0 24 8.88h-2.05a14.65 14.65 0 0 1-1.67 2.11 13.36 13.36 0 0 1-1.67-2.11zm-3.8 1.28c1.02 0 1.840.82 1.84 1.84a1.84 1.84 0 0 1-1.84 1.84c-1.02 0-1.84-0.82-1.84-1.84 0-1.020.82-1.84 1.84-1.84zm0 0.42c-0.78 0-1.410.63-1.41 1.42s0.63 1.42 1.41 1.42c0.78 0 1.41-0.63 1.41-1.42s-0.63-1.42-1.41-1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHbomax;
