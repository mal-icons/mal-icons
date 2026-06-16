import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-stadium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStadium {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.11 5.45 3.72 6.64A0.50.5 0 0 1 3 6.19V3.81c0-0.370.39-0.610.72-0.45L6.1 4.55c0.370.190.370.710.010.9zM18 3.81v2.38c0 0.370.390.610.720.45l2.38-1.19c0.37-0.180.37-0.71 0-0.89l-2.38-1.19a0.490.49 0 0 0-0.720.44zm-7-1v2.38c0 0.370.390.610.720.45l2.38-1.19c0.37-0.180.37-0.71 0-0.89l-2.38-1.19a0.490.49 0 0 0-0.720.44zm-6 7.23c1.380.49 3.770.96 7 0.96s5.62-0.47 7-0.96C19 9.86 16.22 9 12 9s-7 0.86-7 1.04zM14 17h-4c-0.55 0-1 0.45-1 1v3.88c-4.06-0.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V18c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStadium;
