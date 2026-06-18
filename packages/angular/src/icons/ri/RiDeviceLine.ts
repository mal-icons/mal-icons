import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-device-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDeviceLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 8H21C21.55 8 22 8.45 22 9V21C22 21.55 21.55 22 21 22H13C12.45 22 12 21.55 12 21V20H4C3.45 20 3 19.55 3 19V3C3 2.45 3.45 2 4 2H18C18.55 2 19 2.45 19 3V8ZM17 8V4H5V18H12V9C12 8.45 12.45 8 13 8H17ZM14 10V20H20V10H14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDeviceLine;
