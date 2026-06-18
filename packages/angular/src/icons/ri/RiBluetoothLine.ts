import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bluetooth-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBluetoothLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.31 12L18.65 16.34L13 22H11V15.31L6.63 19.68L5.22 18.26L11 12.49V11.51L5.22 5.74L6.63 4.32L11 8.69V2H13L18.65 7.66L14.31 12ZM13 13.51V19.17L15.83 16.34L13 13.51ZM13 10.49L15.83 7.66L13 4.83V10.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBluetoothLine;
