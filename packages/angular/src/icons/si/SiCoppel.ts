import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-coppel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCoppel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.74 2.88a0.720.72 0 0 0-0.740.74v16.76c0 0.430.350.740.740.74h22.52a0.740.74 0 0 0 0.74-0.74V3.62c0.04-0.43-0.31-0.74-0.74-0.74Zm6.61 6.34c1.17 0 2.10.94 2.1 2.1 0 0.23-0.040.43-0.080.62h12.06v1.87h-0.97v2.53h-0.97v-1.28h-0.93v1.28h-0.97v-2.53H9.37c0.040.190.080.430.080.62a2.09 2.09 0 0 1-2.1 2.1c-1.01 0-1.83-0.7-2.06-1.63a3.39 3.39 0 0 1-0.620.08 2.09 2.09 0 0 1-2.1-2.1c0-1.170.93-2.1 2.1-2.10.23 0 0.43 0 0.620.080.23-0.93 1.05-1.63 2.06-1.63Zm0 1.17c-0.55 0-0.970.43-0.930.93 0 0.510.430.930.930.93a0.950.95 0 0 0 0.93-0.930.950.95 0 0 0-0.93-0.93zM4.67 11.94a0.950.95 0 0 0-0.930.93c0 0.510.430.930.930.93a0.950.95 0 0 0 0.93-0.930.950.95 0 0 0-0.93-0.93zm2.68 1.52a0.950.95 0 0 0-0.930.93c0 0.510.430.930.930.93a0.950.95 0 0 0 0.93-0.930.950.95 0 0 0-0.93-0.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCoppel;
