import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-person-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPersonOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.65 5.82a4 4 0 1 1 5.53 5.53L8.65 5.82zM20 17.17c-0.02-1.1-0.63-2.11-1.61-2.62-0.54-0.28-1.13-0.54-1.77-0.76L20 17.17zm0.49 3.32L3.51 3.51A11 0 1 0 2.1 4.92l8.18 8.18c-1.820.23-3.410.8-4.7 1.46C4.6 15.08 4 16.11 4 17.22V20h13.17l1.9 1.9c0.390.39 1.020.39 1.41 0 0.4-0.390.4-1.020.01-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPersonOff;
