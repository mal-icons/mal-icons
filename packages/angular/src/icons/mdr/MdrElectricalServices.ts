import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-electrical-services",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrElectricalServices {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 14c0-0.55-0.45-1-1-1h-2v2h2c0.55 0 1-0.45 1-1zm-1 3h-2v2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-4-5h-2c-1.1 0-2 0.9-2 2h-1c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1h1c0 1.10.9 2 2 2h2c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1zM5 13c0-1.10.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h3.5c0.83 0 1.50.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-0.9-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrElectricalServices;
