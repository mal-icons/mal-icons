import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-layers-clear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLayersClear {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.99 9.79c0.51-0.40.51-1.18 0-1.58l-6.76-5.26c-0.72-0.56-1.73-0.56-2.46 0L9.41 4.02l7.88 7.88 2.7-2.11zm0 3.49-0.01-0.01a0.990.99 0 0 0-1.22 0l-0.050.04 1.4 1.4a0.980.98 0 0 0-0.12-1.43zm1.45 5.6L4.12 1.56a11 0 1 0-1.41 1.41l3.52 3.52-2.22 1.72c-0.510.4-0.51 1.18 0 1.58l6.76 5.26c0.720.56 1.730.56 2.46 0l0.87-0.68 1.42 1.42-2.92 2.27c-0.360.28-0.870.28-1.23 0l-6.15-4.78a0.990.99 0 0 0-1.22 0 11 0 0 0 0 1.57l6.76 5.26c0.720.56 1.730.56 2.46 0l3.72-2.89 3.07 3.07c0.390.39 1.020.39 1.41 0 0.41-0.390.41-1.020.02-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLayersClear;
