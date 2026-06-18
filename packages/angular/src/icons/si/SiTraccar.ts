import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-traccar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTraccar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 1.61C0.26 4.92-1.7 12.26 1.61 18c3.31 5.74 10.65 7.7 16.39 4.39 5.74-3.31 7.7-10.65 4.39-16.39C19.080.26 11.74-1.7 6 1.61m0.71 1.22c5.06-2.92 11.54-1.19 14.46 3.87 2.92 5.06 1.19 11.54-3.87 14.46-5.06 2.92-11.54 1.19-14.46-3.87C-0.09 12.23 1.64 5.76 6.71 2.83m3.91 14.32a3.77 3.77 0 1 1-3.77-6.53l1.88 3.26Zm5.73-11.4-1.18 1.5c0.660.51 1.28 1.16 1.72 1.93s0.7 1.630.81 2.46l1.88-0.27c-0.14-1.07-0.48-2.13-1.06-3.13-0.58-1-1.32-1.82-2.18-2.48M14.07 8.76l-1.18 1.49c0.270.220.550.480.730.80.190.320.280.690.33 1.04l1.88-0.27c-0.08-0.59-0.26-1.16-0.58-1.71-0.32-0.55-0.72-0.99-1.19-1.35Zm-3.83 3.71a0.940.94 0 1 0 1.88 0 0.940.94 0 1 0-1.88 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTraccar;
