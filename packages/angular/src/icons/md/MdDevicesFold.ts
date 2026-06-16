import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-devices-fold",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdDevicesFold {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3h-3c0-1.44-1.47-2.4-2.79-1.84l-3 1.29C10.48 2.76 10 3.49 10 4.29V19c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-5 13.68-3 1.29V4.29L15 3v13.68zM20 19h-5.33l1.12-0.48c0.73-0.32 1.21-1.04 1.21-1.84V5h3v14zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdDevicesFold;
