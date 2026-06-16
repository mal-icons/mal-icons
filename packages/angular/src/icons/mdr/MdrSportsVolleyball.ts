import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sports-volleyball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSportsVolleyball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 4.01C3.58 5.84 2 8.73 2 12c0 1.460.32 2.850.89 4.11L6 14.31V4.01zm5 7.41V2.05c-1.060.11-2.070.38-3 0.79v10.32l3-1.74zm1 1.73-8.11 4.68c0.610.84 1.34 1.59 2.18 2.2L15 14.89l-3-1.74zm1-5.19v3.46l8.11 4.68c0.42-0.930.7-1.930.82-2.98L13 7.96zM8.07 21.2c1.210.51 2.530.8 3.930.8 3.34 0 6.29-1.65 8.11-4.16L17 16.04 8.07 21.2zm13.85-10.39c-0.55-4.63-4.26-8.3-8.92-8.76v3.6l8.92 5.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSportsVolleyball;
