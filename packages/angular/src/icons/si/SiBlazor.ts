import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-blazor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBlazor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.83 8.1a13.91 13.91 0 0 1-13.64 11.72 10.11 10.11 0 0 1-1.99-0.12 6.11 6.11 0 0 1-5.08-5.76 5.93 5.93 0 0 1 11.87-0.08c0.030.98-0.4 1.85-1.28 1.87-0.94 0-1.37-0.67-1.37-1.57v-2.5a1.53 1.53 0 0 0-1.52-1.53H8.72a3.65 3.65 0 1 0 2.69 6.08l0.07-0.110.070.12a2.58 2.58 0 0 0 2.2 1.05 2.91 2.91 0 0 0 2.69-3.04 7.91 7.91 0 0 0-0.22-1.93 7.4 7.4 0 0 0-14.64 1.6 7.5 7.5 0 0 0 7.31 7.4s0.550.05 1.170.04a15.8 15.8 0 0 0 8.47-2.53c0.04-0.020.070.030.050.06a12.44 12.44 0 0 1-9.69 3.96A8.74 8.74 0 0 1 0 13.86a9.05 9.05 0 0 1 3.63-7.25 8.86 8.86 0 0 1 5.23-1.73h2.81a7.91 7.91 0 0 0 5.84-2.580.110.11 0 0 1 0.06-0.030.110.11 0 0 1 0.120.050.110.11 0 0 1 0.020.07 7.93 7.93 0 0 1-1.23 3.550.110.11 0 0 0-0.010.060.110.11 0 0 0 0.070.090.110.11 0 0 0 0.060 8.51 8.51 0 0 0 5.91-4.880.160.16 0 0 1 0.05-0.050.150.15 0 0 1 0.15 0 0.150.15 0 0 1 0.050.05 10.78 10.78 0 0 1 1.06 6.87zm-14.94 3.53a2.19 2.19 0 1 0 2.19 2.19v-2.04a0.160.16 0 0 0-0.15-0.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBlazor;
