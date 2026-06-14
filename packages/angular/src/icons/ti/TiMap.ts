import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-map",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMap {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.38 3.08c-0.37-0.15-0.8-0.07-1.090.22l-3.87 3.87-4.3-3.44c-0.4-0.32-0.97-0.29-1.330.07l-4.5 4.5c-0.190.19-0.290.44-0.290.71v10c0 0.40.240.770.620.920.120.050.250.080.380.080.26 0 0.52-0.10.71-0.29l3.87-3.87 4.3 3.44c0.40.320.970.28 1.33-0.07l4.5-4.5c0.19-0.190.29-0.440.29-0.71v-10c0-0.4-0.24-0.77-0.62-0.92zm-13.38 13.51v-7.17l3-3v7.24c-0.070.04-3 2.93-3 2.93zm4.13-2.87l-0.12-0.07v-7.47s3.96 3.14 4 3.17v7.47l-3.87-3.1zm7.88-0.13l-3 3v-7.24c0.07-0.04 3-2.94 3-2.94v7.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMap;
