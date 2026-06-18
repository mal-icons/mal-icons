import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-wireless-charging-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWirelessChargingFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.93 4.93L5.34 6.34C3.9 7.79 3 9.79 3 12C3 14.21 3.9 16.21 5.34 17.66L3.93 19.07C2.12 17.26 1 14.76 1 12C1 9.24 2.12 6.74 3.93 4.93ZM20.07 4.93C21.88 6.74 23 9.24 23 12C23 14.76 21.88 17.26 20.07 19.07L18.66 17.66C20.1 16.21 21 14.21 21 12C21 9.79 20.11 7.79 18.66 6.34L20.07 4.93ZM13 5V11H16L11 19V13H8L13 5ZM6.76 7.76L8.17 9.17C7.45 9.9 7 10.9 7 12C7 13.1 7.45 14.1 8.17 14.83L6.76 16.24C5.67 15.16 5 13.66 5 12C5 10.34 5.67 8.84 6.76 7.76ZM17.24 7.76C18.33 8.84 19 10.34 19 12C19 13.66 18.33 15.16 17.24 16.24L15.83 14.83C16.55 14.1 17 13.1 17 12C17 10.9 16.55 9.9 15.83 9.17L17.24 7.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWirelessChargingFill;
