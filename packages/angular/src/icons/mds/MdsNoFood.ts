import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-no-food",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNoFood {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.35 8.52 11 5h5V1h2v4h5l-1.38 13.79L18 15.17l-6.65-6.65zM21.9 21.9 2.1 2.10.69 3.51l5.7 5.7C3.46 9.83 1 11.76 1 15h11.17l2 2H1v2h15v-0.17l4.49 4.49 1.41-1.42zM1 23h15v-2H1v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNoFood;
