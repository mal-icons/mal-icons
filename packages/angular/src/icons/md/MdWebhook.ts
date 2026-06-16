import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-webhook",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdWebhook {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 15h5.88c0.27-0.310.67-0.5 1.12-0.50.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5c-0.44 0-0.84-0.19-1.12-0.5H11.9A5 5 0 1 1 6 11.1v2.07c-1.160.41-2 1.53-2 2.83 0 1.65 1.35 3 3 3s3-1.35 3-3v-1zm2.5-11c1.65 0 3 1.35 3 3h2c0-2.76-2.24-5-5-5a5 5 0 0 0-3.45 8.62l-2.35 3.9c-0.680.14-1.20.75-1.2 1.48 0 0.830.67 1.5 1.5 1.5a1.5 1.5 0 0 0 1.43-1.95l3.38-5.63A3 3 0 0 1 9.5 7c0-1.65 1.35-3 3-3zm4.5 9c-0.64 0-1.230.2-1.720.54l-3.05-5.07C11.53 8.35 11 7.74 11 7c0-0.830.67-1.5 1.5-1.5S14 6.17 14 7c0 0.15-0.020.29-0.060.43l2.19 3.65c0.28-0.050.57-0.080.87-0.08 2.76 0 5 2.24 5 5s-2.24 5-5 5a5 5 0 0 1-4.33-2.5h2.67c0.480.32 1.050.5 1.660.5 1.65 0 3-1.35 3-3s-1.35-3-3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdWebhook;
