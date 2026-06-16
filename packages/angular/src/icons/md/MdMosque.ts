import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-mosque",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdMosque {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 0.740.4 1.38 1 1.72V13h-2v-2c0-0.95-0.66-1.74-1.55-1.940.34-0.580.55-1.250.55-1.97 0-1.31-0.65-2.53-1.74-3.25L12 1 7.74 3.84A3.89 3.89 0 0 0 6 7.09c0 0.720.21 1.390.55 1.96C5.66 9.26 5 10.05 5 11v2H3V8.72c0.6-0.34 1-0.98 1-1.72 0-1.1-2-3-2-3S0 5.9 0 7c0 0.740.4 1.38 1 1.72V21h10v-4c0-0.550.45-1 1-1s1 0.45 1 1v4h10V8.72c0.6-0.34 1-0.98 1-1.72zM8.85 5.5 12 3.4l3.15 2.1c0.530.360.850.950.85 1.59C16 8.14 15.14 9 14.09 9H9.91C8.86 9 8 8.14 8 7.09c0-0.640.32-1.230.85-1.59zM21 19h-6v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2H3v-4h4v-4h10v4h4v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdMosque;
