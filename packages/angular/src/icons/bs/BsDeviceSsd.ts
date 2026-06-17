import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-device-ssd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDeviceSsd {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.75 4a0.750.75 0 0 0-0.750.75v3.5c0 0.410.340.750.750.75h6.5a0.750.75 0 0 0 0.75-0.75v-3.5a0.750.75 0 0 0-0.75-0.75zM5 8V5h6v3zm0-5.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m7 0a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0M4.5 11a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m7 0a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm11 12V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 0 1-1m-7.25 1v-2H5v2zm1.75 0v-2h-0.75v2zm1.75 0v-2H8.5v2zM11 13h-0.75v2H11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDeviceSsd;
