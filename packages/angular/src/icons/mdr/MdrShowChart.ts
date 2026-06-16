import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-show-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrShowChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m4.2 17.78 5.3-5.3 3.25 3.25c0.410.41 1.070.39 1.45-0.04l7.17-8.07c0.35-0.390.33-0.99-0.04-1.37a1 1 0 0 0-1.450.04l-6.39 7.18-3.29-3.29a11 0 0 0-1.41 0l-6.09 6.1a11 0 0 0 0 1.41l0.090.09c0.390.39 1.030.39 1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrShowChart;
