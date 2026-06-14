import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-star-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedStar16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0.25-12.93a0.480.48 0 0 0-0.680.2l-1.2 2.43-2.680.39a0.480.48 0 0 0-0.270.82l1.94 1.89-0.46 2.67a0.480.48 0 0 0 0.690.5L8 10.71l2.4 1.26a0.480.48 0 0 0 0.69-0.5l-0.46-2.67L12.58 6.9a0.480.48 0 0 0-0.26-0.81l-2.68-0.39-1.2-2.43a0.470.47 0 0 0-0.18-0.19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedStar16;
