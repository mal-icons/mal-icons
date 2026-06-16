import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-elderly-woman",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrElderlyWoman {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.52 11c-1.57 0-2.94-0.9-3.6-2.21l-0.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5L7 21c-0.330.44-0.24 1.070.2 1.40.440.33 1.070.24 1.4-0.2L11 19h2v3c0 0.550.45 1 1 1s1-0.45 1-1v-2.71c0-0.22-0.04-0.43-0.1-0.64L13 13l0.49-2.71A6.02 6.02 0 0 0 17 12.81V13c0 0.280.220.50.50.5s0.5-0.220.5-0.5v-0.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5v10c0 0.280.220.50.50.5s0.5-0.220.5-0.5v-10c0-0.79-0.62-1.5-1.48-1.5zM11.6 2.91c-0.060.19-0.10.38-0.10.59 0 1.10.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.21 0-0.40.04-0.590.1-0.15-0.35-0.5-0.6-0.91-0.6-0.55 0-1 0.45-1 1 0 0.410.250.760.60.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrElderlyWoman;
