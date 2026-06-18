import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-google-plus-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlGooglePlusCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.01 11.97C22 6.46 17.52 2 12.01 2 6.49 2 2.02 6.46 2 11.97L2 11.95v0.11l0-0.02c0.02 5.51 4.49 9.98 10.01 9.98 5.51 0 9.99-4.46 10.01-9.97l00.03v-0.12l00.03zM9.28 16.56c-2.51 0-4.55-2.04-4.55-4.55s2.04-4.55 4.55-4.55c1.23 0 2.260.45 3.05 1.19l-1.29 1.25c-0.32-0.31-0.9-0.67-1.75-0.67-1.5 0-2.73 1.25-2.73 2.79 0 1.53 1.23 2.78 2.73 2.78 1.74 0 2.38-1.21 2.5-1.92H9.28V11.18h4.26c0.070.290.120.550.120.93 0 2.6-1.74 4.45-4.37 4.45zm10.46-4.09H17.92v1.82h-1.36v-1.82h-1.82v-1.36h1.82v-1.82h1.36v1.82h1.82v1.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlGooglePlusCircle;
