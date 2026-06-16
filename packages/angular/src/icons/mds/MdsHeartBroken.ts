import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-heart-broken",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsHeartBroken {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 3c-0.96 0-1.90.25-2.730.69L12 9h3l-3 10 1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3 4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5 5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsHeartBroken;
