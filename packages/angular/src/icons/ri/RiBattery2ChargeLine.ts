import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-battery-2-charge-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBattery2ChargeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 12H16L11 19V14H8L13 7V12ZM11 6H7V20H17V6H13V4H11V6ZM9 4V3C9 2.45 9.45 2 10 2H14C14.55 2 15 2.45 15 3V4H18C18.55 4 19 4.45 19 5V21C19 21.55 18.55 22 18 22H6C5.45 22 5 21.55 5 21V5C5 4.45 5.45 4 6 4H9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBattery2ChargeLine;
