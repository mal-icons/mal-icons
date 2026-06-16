import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-battery-unknown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBatteryUnknown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280-80v-720h120v-80h160v80h120v720H280Zm193-165q14 0 24.5-10.5T508-280q0-14-10.5-24.5T473-315q-14 0-24.5 10.5T438-280q0 14 10.5 24.5T473-245Zm-24-122h49q0-32 13.5-51.5t29.5-36q16-16.5 29.5-34T584-534q0-48-30-75t-81-27q-38 0-67.5 21T363-558l46 16q8-22 24.5-34.5T473-589q29 0 45.5 14t16.5 40q0 23-13.5 37T492-468.5q-16 15.5-29.5 38T449-367Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBatteryUnknown;
