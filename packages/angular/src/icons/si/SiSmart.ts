import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-smart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSmart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.850.85A11.14 11.14 0 0 0 0 11.98v0.04a11.14 11.14 0 0 0 10.84 11.14h0.28a10.98 10.98 0 0 0 4.04-0.760.40.4 0 0 0 0.26-0.37v-5.56a0.210.21 0 0 0-0.27-0.19c-1.20.49-2.210.96-3.960.96a5.22 5.22 0 0 1-5.22-5.22 5.22 5.22 0 0 1 5.22-5.22c1.75 0 2.760.47 3.960.96a0.210.21 0 0 0 0.27-0.19V1.98a0.40.4 0 0 0-0.26-0.37 10.98 10.98 0 0 0-4.04-0.76Zm5.86 1.82v18.67a0.240.24 0 0 0 0.380.19c3.41-2.12 6.91-8.16 6.91-9.52 0-1.36-3.5-7.4-6.91-9.52a0.240.24 0 0 0-0.380.18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSmart;
