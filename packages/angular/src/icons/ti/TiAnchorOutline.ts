import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-anchor-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiAnchorOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"6","r":"1"}],["path",{"d":"M19.79 12.1c0.13-0.340.21-0.710.21-1.1 0-1.65-1.35-3-3-3h-0.42c0.27-0.620.42-1.30.42-2 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 0.70.15 1.380.42 2h-0.42c-1.65 0-3 1.35-3 3 0 0.390.070.760.21 1.1-0.730.55-1.21 1.42-1.21 2.4 0 4.96 4.04 9 9 9s9-4.04 9-9c0-0.98-0.47-1.86-1.21-2.4zm-7.79 9.4c-3.86 0-7-3.14-7-7 0-0.550.45-1 1-1s1 0.45 1 1c0 2.41 1.72 4.43 4 4.9v-7.4h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1h4v-1.18c-1.16-0.41-2-1.51-2-2.82 0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.31-0.84 2.4-2 2.82v1.18h4c0.55 0 1 0.45 1 1s-0.45 1-1 1h-4v7.4c2.28-0.46 4-2.48 4-4.9 0-0.550.45-1 1-1s1 0.45 1 1c0 3.86-3.14 7-7 7zm-4.68-8.5h2.68v4.96c-1.21-0.7-2-2.01-2-3.46 0-0.6-0.26-1.13-0.68-1.5zm9.36 0c-0.420.37-0.680.9-0.68 1.5 0 1.45-0.79 2.76-2 3.46v-4.96h2.68z"}],["circle",{"cx":"12","cy":"6","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiAnchorOutline;
