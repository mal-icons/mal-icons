import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-wi-fi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiWiFi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.41 19.41c0.78-0.780.78-2.05 0-2.83-0.78-0.78-2.05-0.78-2.830-0.780.78-0.78 2.05 0 2.830.780.78 2.050.78 2.830zM20.49 11.52c-0.51 0-1.02-0.19-1.41-0.59-3.9-3.9-10.24-3.9-14.14 0-0.780.78-2.050.78-2.83 0-0.78-0.78-0.78-2.05 0-2.83 5.46-5.46 14.34-5.46 19.8 0 0.780.780.78 2.05 0 2.83-0.390.39-0.90.59-1.410.59zM7.76 15.76c-0.51 0-1.02-0.19-1.41-0.59-0.78-0.78-0.78-2.05 0-2.83 3.12-3.12 8.19-3.12 11.31 0 0.780.780.78 2.05 0 2.83-0.780.78-2.050.78-2.83 0-1.56-1.56-4.1-1.56-5.66 0-0.390.39-0.90.59-1.410.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiWiFi;
