import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-auth0",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAuth0 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.98 7.45L19.62 0H4.35L2.02 7.45c-1.35 4.310.03 9.21 3.82 12.02L12.01 24l6.16-4.55c3.76-2.81 5.18-7.69 3.82-12.01l-6.16 4.58 2.34 7.45-6.16-4.6-6.16 4.58 2.36-7.43-6.19-4.55 7.63-0.04L12.01 0l2.36 7.4 7.620.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAuth0;
