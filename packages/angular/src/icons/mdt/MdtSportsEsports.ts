import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-sports-esports",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSportsEsports {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.53 7H7.47c-0.99 0-1.840.74-1.98 1.72L4.4 16.37c-0.030.210.050.350.130.440.070.090.20.190.410.190.15 0 0.29-0.060.39-0.16L8.17 14h7.66l2.84 2.84c0.10.10.240.160.390.160.21 0 0.34-0.10.42-0.19a0.520.52 0 0 0 0.13-0.44l-1.09-7.66c-0.15-0.97-1-1.71-1.99-1.71zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm2 3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z","opacity":".3"}],["path",{"d":"m21.58 16.09-1.09-7.66A4 4 0 0 0 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66a2.55 2.55 0 0 0 4.32 2.16L9 16h6l2.25 2.25c0.480.48 1.130.75 1.80.75 1.56 0 2.75-1.37 2.53-2.91zm-2.10.72a0.540.54 0 0 1-0.420.19c-0.15 0-0.29-0.06-0.39-0.16L15.83 14H8.17l-2.84 2.84c-0.10.1-0.240.16-0.390.16a0.540.54 0 0 1-0.42-0.190.520.52 0 0 1-0.13-0.44l1.09-7.66C5.63 7.74 6.48 7 7.47 7h9.06c0.99 0 1.840.74 1.98 1.72l1.09 7.66c0.030.2-0.050.34-0.120.43z"}],["path",{"d":"M9 8H8v2H6v1h2v2h1v-2h2v-1H9z"}],["circle",{"cx":"17","cy":"12","r":"1"}],["circle",{"cx":"15","cy":"9","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSportsEsports;
