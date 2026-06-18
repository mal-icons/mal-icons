import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fyle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFyle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.02 0H1.24C0.56 0 0 0.56 0 1.24v21.51C0 23.440.56 24 1.24 24h21.52A1.24 1.24 0 0 0 24 22.76V1.24C24 0.56 23.44 0 22.76 0H11.68v15.59c-0.040.78-0.29 1.4-0.76 1.87-0.920.93-2.52 1.05-3.92 1.05-1.89 0-4.43-0.24-4.86-2.27l-0.06-0.51c-0.02-0.1-0.02-0.39-0.02-1.13V3.97c0-0.490.16-0.910.51-1.25A1.7 1.7 0 0 1 3.81 2.2l4.610.020.160.04v1.56H3.96c-0.12 0-0.180.06-0.180.14v3.48h3.49v1.6H3.78v6.57c0.04 1.15 1.74 1.38 3.18 1.380.64-0.02 1.99-0.02 2.6-0.630.16-0.160.32-0.470.46-0.93V0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFyle;
