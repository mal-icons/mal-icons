import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-layers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLayers {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.6 18.06c-0.360.28-0.870.28-1.23 0l-6.15-4.78a0.990.99 0 0 0-1.22 0 11 0 0 0 0 1.57l6.76 5.26c0.720.56 1.730.56 2.46 0l6.76-5.26c0.51-0.40.51-1.17 0-1.57l-0.01-0.01a0.990.99 0 0 0-1.22 0l-6.15 4.79zm0.63-3.02 6.76-5.26c0.51-0.40.51-1.18 0-1.58l-6.76-5.26c-0.72-0.56-1.73-0.56-2.46 0L4.01 8.21c-0.510.4-0.51 1.18 0 1.58l6.76 5.26c0.720.56 1.740.56 2.46-0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLayers;
