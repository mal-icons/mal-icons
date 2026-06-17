import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-lightbulb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLightbulb {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 6a6 6 0 1 1 10.17 4.31c-0.20.2-0.360.4-0.450.62l-0.76 1.77A0.50.5 0 0 1 10.5 13a0.50.5 0 0 1 0 1 0.50.5 0 0 1 0 1l-0.220.45a1 1 0 0 1-0.890.55H6.62a1 1 0 0 1-0.89-0.55L5.5 15a0.50.5 0 0 1 0-1 0.50.5 0 0 1 0-1 0.50.5 0 0 1-0.46-0.3l-0.76-1.77a2 2 0 0 0-0.45-0.62A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.48 8.59c0.260.250.510.560.680.94L5.83 12h4.34l0.63-1.47c0.16-0.380.41-0.690.68-0.94A5 5 0 0 0 8 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLightbulb;
