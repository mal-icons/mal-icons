import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filetype-php",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFiletypePhp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v4h0.79v-1.34h0.8q0.43 0 0.73-0.170.31-0.170.46-0.47a1.4 1.4 0 0 0 0.16-0.68q0-0.37-0.16-0.68a1.2 1.2 0 0 0-0.46-0.48q-0.3-0.18-0.73-0.18m0.55 1.33a0.80.8 0 0 1-0.080.380.570.57 0 0 1-0.240.240.80.8 0 0 1-0.370.08H0.79V12.48h0.66q0.33 0 0.510.180.190.180.190.52m4.48 2.67V11.85h-0.79v1.63H4.15V11.85h-0.79v4h0.79v-1.71h1.68v1.71zm0.7-4h1.6q0.43 0 0.730.180.30.180.460.480.160.30.160.68t-0.160.68q-0.160.3-0.460.47a1.45 1.45 0 0 1-0.730.17H8.12v1.34h-0.79zm2.06 1.71a0.80.8 0 0 0 0.08-0.38q0-0.34-0.18-0.52-0.18-0.18-0.51-0.18h-0.66v1.41h0.66a0.80.8 0 0 0 0.38-0.080.570.57 0 0 0 0.24-0.24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFiletypePhp;
