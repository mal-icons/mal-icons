import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bluetooth-connect-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBluetoothConnectFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.31 12L18.65 16.34L13 22H11V15.31L6.63 19.68L5.22 18.26L11 12.49V11.51L5.22 5.74L6.63 4.32L11 8.69V2H13L18.65 7.66L14.31 12ZM13 13.51V19.17L15.83 16.34L13 13.51ZM13 10.49L15.83 7.66L13 4.83V10.49ZM19.5 13.5C18.67 13.5 18 12.83 18 12C18 11.17 18.67 10.5 19.5 10.5C20.33 10.5 21 11.17 21 12C21 12.83 20.33 13.5 19.5 13.5ZM6.5 13.5C5.67 13.5 5 12.83 5 12C5 11.17 5.67 10.5 6.5 10.5C7.33 10.5 8 11.17 8 12C8 12.83 7.33 13.5 6.5 13.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBluetoothConnectFill;
