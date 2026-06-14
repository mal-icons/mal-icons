import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-move-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowMoveOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.83 10.59l-9.41-9.41c-0.39-0.39-0.9-0.59-1.41-0.59s-1.020.2-1.410.59l-9.41 9.41c-0.780.78-0.78 2.05 0 2.83l9.41 9.41c0.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59l9.41-9.41c0.78-0.780.78-2.05 0-2.83zm-5.83 5.41c-0.26 0-0.51-0.1-0.71-0.29-0.39-0.39-0.39-1.02 0-1.41l1.29-1.29h-4.59v4.59l1.29-1.29c0.2-0.190.45-0.290.71-0.29s0.510.10.710.29c0.390.390.39 1.02 0 1.41l-3.71 3.71-3.71-3.71c-0.39-0.39-0.39-1.02 0-1.410.2-0.190.45-0.290.71-0.29s0.510.10.710.29l1.29 1.29v-4.59h-4.59l1.29 1.29c0.390.390.39 1.02 0 1.41-0.190.2-0.450.29-0.710.29s-0.51-0.1-0.71-0.29l-3.71-3.71 3.71-3.71c0.2-0.190.45-0.290.71-0.29s0.510.10.710.29c0.390.390.39 1.02 0 1.41l-1.29 1.29h4.59v-4.59l-1.29 1.29c-0.190.2-0.450.29-0.710.29s-0.51-0.1-0.71-0.29c-0.39-0.39-0.39-1.02 0-1.41l3.71-3.71 3.71 3.71c0.390.390.39 1.02 0 1.41-0.190.2-0.450.29-0.710.29s-0.51-0.1-0.71-0.29l-1.29-1.29v4.59h4.59l-1.29-1.29c-0.39-0.39-0.39-1.02 0-1.410.2-0.190.45-0.290.71-0.29s0.510.10.710.29l3.71 3.71-3.71 3.71c-0.190.2-0.450.29-0.710.29zm-1.73-2c-0.170.3-0.270.64-0.27 1-0.36 0-0.70.09-1 0.27v-1.27h1.27zm-6.54 0h1.27v1.27c-0.3-0.17-0.64-0.27-1-0.27 0-0.36-0.09-0.7-0.27-1zm0-4c0.18-0.30.27-0.640.27-1 0.36 0 0.7-0.09 1-0.27v1.27h-1.27zm6.54 0h-1.27v-1.27c0.30.180.640.27 1 0.27 0 0.360.090.70.27 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowMoveOutline;
