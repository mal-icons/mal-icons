import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-important-devices",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsImportantDevices {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 11.01 17 11v11h7V11.01zM23 20h-5v-7h5v7zM22 2H0v16h9v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V2zM11.97 9 11 6l-0.97 3H7l2.47 1.76-0.94 2.91 2.47-1.8 2.47 1.8-0.94-2.91L15 9h-3.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsImportantDevices;
