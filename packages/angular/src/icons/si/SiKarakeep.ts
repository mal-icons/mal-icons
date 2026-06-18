import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-karakeep",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKarakeep {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.580.05H1.42C0.640.05 0 0.69 0 1.47v21.06c0 0.780.64 1.42 1.42 1.42h21.16c0.78 0 1.42-0.63 1.42-1.42V1.47C24 0.69 23.370.05 22.580.05M10.49 20.44a0.370.37 0 0 1-0.370.37H3.59a0.370.37 0 0 1-0.37-0.37V3.49a0.370.37 0 0 1 0.37-0.37h6.42a0.370.37 0 0 1 0.370.37v6.45s-0.04 2.780.1 4.96zm10.19 0a0.370.37 0 0 1-0.570.31l-2.97-1.94a0.370.37 0 0 0-0.420.01l-2.61 1.89a0.360.36 0 0 1-0.340.040.370.37 0 0 1-0.16-0.3V7.27c0.35-0.070.75-0.11 1.2-0.11 2.23 0 5.88 1.26 5.88 4.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKarakeep;
