import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-device-ssd-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDeviceSsdFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 8V4h6v4z"}],["path",{"d":"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m9 0a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0M3.5 11a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m9.5-0.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0M4.75 3h6.5a0.750.75 0 0 1 0.750.75v4.5a0.750.75 0 0 1-0.750.75h-6.5A0.750.75 0 0 1 4 8.25v-4.5A0.750.75 0 0 1 4.75 3M5 12h6a1 1 0 0 1 1 1v2h-1v-2h-0.75v2h-1v-2H8.5v2h-1v-2h-0.75v2h-1v-2H5v2H4v-2a1 1 0 0 1 1-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDeviceSsdFill;
