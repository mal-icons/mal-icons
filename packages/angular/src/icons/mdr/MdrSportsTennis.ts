import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sports-tennis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSportsTennis {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.52 2.49C17.180.15 12.90.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-0.02 1.580.26 3.89-1.35 5.5l-3.54 3.53c-0.390.39-0.39 1.02 0 1.420.390.39 1.020.39 1.42 0l3.53-3.54c1.61-1.61 3.92-1.33 5.5-1.35s3.86-0.94 5.46-2.54c2.93-2.92 3.41-7.2 1.07-9.54zm-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72s5.18-2.59 6.72-1.06c1.53 1.53 1.05 4.61-1.06 6.72s-5.18 2.59-6.72 1.06zM18 17c0.53 0 1.040.21 1.410.590.780.780.78 2.05 0 2.83-0.370.37-0.880.58-1.410.58s-1.04-0.21-1.41-0.59c-0.78-0.78-0.78-2.05 0-2.830.37-0.370.88-0.58 1.41-0.58m0-2a4 4 0 0 0-2.83 6.83c0.780.78 1.81 1.17 2.83 1.17a4 4 0 0 0 2.83-6.83A4 4 0 0 0 18 15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSportsTennis;
