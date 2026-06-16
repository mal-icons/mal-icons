import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-pest-control-rodent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPestControlRodent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.31 17.38-2.39-2.13c0.52-2.36-1.36-4.25-3.42-4.25-1.16 0-3.50.9-3.5 3.5 0 0.970.39 1.84 1.03 2.47l-0.710.71A4.46 4.46 0 0 1 11 14.5c0-1.70.96-3.17 2.35-3.93a5 5 0 0 0-2.28-0.57c-2.38 0-4.37 1.65-4.91 3.87A3 3 0 0 1 4 11c0-1.66 1.34-3 3-3h2.5a2.5 2.5 0 0 0 0-5H8c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.5c0.28 0 0.50.220.50.5s-0.220.5-0.50.5H7a5 5 0 0 0-1 9.9v0.03C6 18.73 8.27 21 11.07 21h8.86c1.87 0 2.81-2.34 1.38-3.62zM18 19c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPestControlRodent;
