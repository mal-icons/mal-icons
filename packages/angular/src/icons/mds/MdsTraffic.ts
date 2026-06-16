import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-traffic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsTraffic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 10h-3V8.86c1.72-0.45 3-2 3-3.86h-3V3H7v2H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V21h10v-2.14c1.72-0.45 3-2 3-3.86h-3v-1.14c1.72-0.45 3-2 3-3.86zm-8 9a2 2 0 1 10-4A2 2 0 0 1 12 19zm0-5a2 2 0 1 10-4A2 2 0 0 1 12 14zm0-5a2 2 0 0 1-2-2c0-1.110.89-2 2-2a2 2 0 1 1 0 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsTraffic;
