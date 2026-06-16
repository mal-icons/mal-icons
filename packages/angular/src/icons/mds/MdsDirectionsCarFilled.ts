import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-directions-car-filled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDirectionsCarFilled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.57 5H5.43L3 12v9h3v-2h12v2h3v-9l-2.43-7zM7.5 16c-0.83 0-1.5-0.67-1.5-1.5S6.67 13 7.5 13s1.50.67 1.5 1.5S8.33 16 7.5 16zm9 0c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDirectionsCarFilled;
