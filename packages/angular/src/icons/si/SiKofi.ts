import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-kofi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKofi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.35 2.72c-2.7 0-4.990.03-6.830.26C2.08 3.29 0 5.15 0 8.61c0 3.510.18 6.13 1.59 8.49 1.58 2.7 4.23 4.18 7.66 4.18h0.83c4.21 0 6.49-2.23 7.64-4a9.5 9.5 0 0 0 1.09-2.34C21.79 14.69 24 12.22 24 9.21v-0.41c0-3.25-2.13-5.51-5.79-5.87-1.56-0.16-2.65-0.21-6.86-0.21m0 1.95c4.21 0 5.090.05 6.570.18 2.620.31 4.13 1.58 4.13 4v0.39c0 2.16-1.79 3.84-3.87 3.84h-0.93l-0.160.65c-0.21 1.01-0.6 1.82-1.04 2.55-0.91 1.43-2.54 3.06-5.92 3.06h-0.8c-2.57 0-4.83-0.88-6.08-3.19-1.09-2-1.3-4.15-1.3-7.51 0-2.180.86-3.4 3.01-3.71 1.53-0.23 3.56-0.26 6.39-0.26m6.55 2.29c-0.42 0-0.650.23-0.650.55v2.94c0 0.310.230.550.650.55 1.32 0 2.05-0.75 2.05-2s-0.73-2.03-2.05-2.03m-10.390.18c-1.82 0-3.01 1.48-3.01 3.14 0 1.530.86 2.86 1.95 3.90.730.7 1.87 1.43 2.65 1.9a1.47 1.47 0 0 0 1.51 0c0.78-0.47 1.92-1.19 2.62-1.9 1.12-1.04 1.97-2.36 1.97-3.9 0-1.66-1.25-3.14-3.04-3.14-1.06 0-1.790.55-2.34 1.3-0.49-0.75-1.25-1.3-2.31-1.3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKofi;
