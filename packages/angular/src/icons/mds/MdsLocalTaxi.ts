import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-local-taxi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsLocalTaxi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.58 5H15V3H9v2H5.43L3 12v9h3v-2h12v2h3v-9l-2.42-7zM6.5 16c-0.83 0-1.5-0.67-1.5-1.5S5.67 13 6.5 13s1.50.67 1.5 1.5S7.33 16 6.5 16zm11 0c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsLocalTaxi;
