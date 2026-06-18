import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-brush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBrush {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.71 2.29a11 0 0 0-1.41 0l-5.84 5.84c-0.010-0.03-0.01-0.04-0.01a11 0 0 0-0.710.29L4.29 9.83a2.99 2.99 0 0 0-0.88 2.12c0 0.80.31 1.560.88 2.12l0.710.71-2.12 2.12A2.92 2.92 0 0 0 2 19.01a2.97 2.97 0 0 0 1.06 2.31c0.520.44 1.190.68 1.890.680.83 0 1.65-0.34 2.25-0.94l2.04-2.040.710.71c1.13 1.13 3.11 1.13 4.240l1.42-1.41a11 0 0 0 0.29-0.71c0-0.03-0.01-0.05-0.01-0.08l5.83-5.83a11 0 0 0 0-1.41l-8-8zm-0.93 16.02a1.02 1.02 0 0 1-1.410l-1.41-1.41a11 0 0 0-1.41 0l-2.75 2.75a1.19 1.19 0 0 1-0.840.350.910.91 0 0 1-0.59-0.21A0.980.98 0 0 1 4 19.01a0.960.96 0 0 1 0.29-0.69l2.83-2.83a11 0 0 0 0-1.41L5.7 12.66a0.990.99 0 0 1-0.29-0.71c0-0.270.1-0.520.29-0.71l0.71-0.71 7.07 7.07-0.710.71zm1.89-2.39L8.07 9.34 13 4.41 19.59 11l-4.92 4.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBrush;
