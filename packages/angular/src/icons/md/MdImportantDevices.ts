import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-important-devices",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdImportantDevices {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23 11.01 18 11c-0.55 0-1 0.45-1 1v9c0 0.550.45 1 1 1h5c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-0.99-1-0.99zM23 20h-5v-7h5v7zM20 2H2C0.89 2 0 2.89 0 4v12a2 2 0 0 0 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4a2 2 0 0 0-2-2zm-8.03 7L11 6l-0.97 3H7l2.47 1.76-0.94 2.91 2.47-1.8 2.47 1.8-0.94-2.91L15 9h-3.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdImportantDevices;
