import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-heart-fill-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcHeartFill24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 20.41c-0.490.31-0.90.55-1.190.71-0.150.09-0.310.17-0.460.25h0a0.750.75 0 0 1-0.69 0 16.71 16.71 0 0 1-0.46-0.25 31.15 31.15 0 0 1-4.8-3.34C3.8 15.57 1 12.33 1 8.51 1 5.05 3.83 2.5 6.74 2.5 9.03 2.5 10.88 3.73 12 5.61 13.12 3.73 14.97 2.5 17.26 2.5 20.17 2.5 23 5.05 23 8.51c0 3.82-2.8 7.06-5.39 9.26A31.15 31.15 0 0 1 14 20.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcHeartFill24;
