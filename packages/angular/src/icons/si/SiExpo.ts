import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-expo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiExpo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 20.08c0.040.530.23 1.060.72 1.780.580.85 1.58 1.32 2.30.570.49-0.5 5.79-9.78 8.35-13.29a0.760.76 0 11.25 0c2.56 3.51 7.86 12.79 8.35 13.290.730.75 1.720.28 2.3-0.570.57-0.830.73-1.420.73-2.05 0-0.43-8.26-15.8-9.09-17.08-0.8-1.23-1.04-1.5-2.4-1.54h-1.03c-1.350.04-1.60.31-2.4 1.54C8.27 3.990.33 18.76 0 19.77Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiExpo;
