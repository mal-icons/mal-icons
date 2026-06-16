import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-stop-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStopScreenShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23 18h-1.2l1.79 1.79c0.24-0.180.41-0.460.41-0.79 0-0.55-0.45-1-1-1zM3.23 2.28c-0.39-0.39-1.03-0.39-1.42 0a11 0 0 0 0 1.41l0.840.86s-0.660.57-0.66 1.47C2 6.92 2 16 2 16l0.010.01c0 1.090.88 1.98 1.97 1.99H1c-0.55 0-1 0.45-1 1s0.45 1 1 1h17.13l2 2a11 0 1 0 1.41-1.41L3.23 2.28zM7 15c0.31-1.480.94-2.93 2.08-4.05l1.59 1.59C9.13 12.92 7.96 13.71 7 15zm6-5.87v-0.98c0-0.440.52-0.660.84-0.37L15 8.87l1.61 1.5c0.210.20.210.53 0 0.73l-0.890.83 5.58 5.58c0.43-0.370.7-0.90.7-1.51V6c0-1.09-0.89-1.98-1.98-1.98H7.8l5.14 5.13c0.02-0.010.04-0.020.06-0.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStopScreenShare;
