import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-signal-wifi-off-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSignalWifiOffLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.81 1.39L20.49 19.07L19.07 20.49L15.39 16.8L12 21L0.69 7C1.6 6.26 2.59 5.61 3.64 5.05L1.39 2.81L2.81 1.39ZM3.58 7.39L12 17.82L13.97 15.38L5.13 6.54C4.6 6.8 4.08 7.08 3.58 7.39ZM12 3C16.28 3 20.22 4.5 23.31 7L17.9 13.69L16.48 12.27L20.42 7.39C17.92 5.84 15.03 5 12 5C11.13 5 10.27 5.07 9.42 5.21L7.73 3.51C9.1 3.18 10.53 3 12 3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSignalWifiOffLine;
