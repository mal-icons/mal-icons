import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-integration-instructions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdIntegrationInstructions {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 14.17 8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59zm3.41 1.42L18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17z"}],["path",{"d":"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H5c-0.14 0-0.270.01-0.40.04a2.01 2.01 0 0 0-1.44 1.19c-0.10.23-0.160.49-0.160.77v14c0 0.270.060.540.160.78s0.250.450.430.64c0.270.270.620.47 1.010.550.130.020.260.030.40.03h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-7-0.25c0.41 0 0.750.340.750.75s-0.340.75-0.750.75-0.75-0.34-0.75-0.750.34-0.750.75-0.75zM19 15v4H5V5h14v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdIntegrationInstructions;
