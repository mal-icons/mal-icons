import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-clean-hands",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsCleanHands {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.99 7 1.37-0.630.63-1.370.63 1.37 1.370.63-1.370.63L16.99 9l-0.63-1.37L14.99 7zM20 14c1.1 0 2-0.9 2-2s-2-4-2-4-2 2.9-2 4 0.9 2 2 2zM1 22h4V11H1v11zM9.24 9.5 15 11.65V11a5 5 0 0 0-4-4.9V4h2c0.57 0 1.10.17 1.550.45l1.43-1.43A4.9 4.9 0 0 0 13 2H7.5v2H9v2.11c-1.780.37-3.2 1.68-3.75 3.39h3.99zM22 17h-9l-2.09-0.730.33-0.94L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsCleanHands;
