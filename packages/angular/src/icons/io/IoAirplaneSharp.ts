import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-airplane-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoAirplaneSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M407.72,208c-2.72,0-14.440.08-18.670.31l-57.77,1.52L198.06,48H135.25l74.59,164.61-97.31,1.44L68.25,160H16.14l20.61,94.18c0.150.540.33,1.070.53,1.59a0.260.26,0,0,1,0,0.15,15.42,15.42,0,0,0-0.53,1.58L15.86,352H67.64l45.45-55,96.77,2.17L135.24,464h63l133-161.75,57.77,1.54c4.290.23,16,0.31,18.660.31,24.35,0,44.27-3.34,59.21-9.94C492.22,283,496,265.46,496,256,496,225.94,463,208,407.72,208Zm-71.29,87.9v0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoAirplaneSharp;
