import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-builtbybit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBuiltbybit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.880.03 1.25 5.89a0.250.25 0 0 0 00.45l5.68 3.02c0.080.040.170.040.250l4.69-2.7a0.250.25 0 0 1 0.25 0l4.69 2.7a0.250.25 0 0 0 0.250l5.68-3.02a0.250.25 0 0 0 0-0.45L12.120.03a0.250.25 0 0 0-0.24 0ZM6.92 10.9l-5.71-3.04a0.250.25 0 0 0-0.370.22V18.25c0 0.090.050.180.130.22l9.98 5.5a0.250.25 0 0 0 0.38-0.22v-6.05a0.260.26 0 0 0-0.13-0.22l-4.01-2.31a0.250.25 0 0 1-0.13-0.22v-3.82a0.250.25 0 0 0-0.13-0.22Zm10.15 0 5.71-3.03a0.250.25 0 0 1 0.370.22v10.16c0 0.09-0.050.18-0.130.22l-9.98 5.5a0.250.25 0 0 1-0.38-0.22v-6.05c0-0.090.05-0.170.13-0.22l4.01-2.31a0.250.25 0 0 0 0.13-0.22v-3.82c0-0.090.05-0.180.14-0.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBuiltbybit;
