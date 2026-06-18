import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-apachesuperset",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiApachesuperset {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.17 6.05C2.6 6.05 0 8.58 0 12.01c0 3.43 2.6 5.94 6.17 5.94 2.18 0 3.89-1.03 5.78-3.08 1.53 2.03 4.04 3.14 5.89 3.08 3.57 0 6.17-2.5 6.17-5.94 0-3.44-2.6-5.97-6.17-5.97-2.86 0-5.14 2.42-5.77 3.17-0.76-0.9-1.67-1.66-2.68-2.27-1.02-0.59-2.08-0.9-3.21-0.9Zm2.88 1.3c1.160.6 1.95 1.42 2.64 2.3-0.530.63-1.25 1.48-1.74 2.07-0.56-0.66-1.58-1.91-2.61-2.31ZM6.19 9.7c1.020.03 1.810.46 3.44 2.41-1.16 1.38-2.2 2.24-3.43 2.24-1.51 0-2.41-0.99-2.41-2.31s0.91-2.38 2.41-2.34zm11.54 0c1.51 0 2.41 1.03 2.41 2.34 0 1.32-0.86 2.3-2.4 2.31-0.57-0.04-1.53-0.03-3.44-2.31l0.07-0.0900c1.12-1.33 2.1-2.25 3.36-2.25zm-3.76 2.74c0.610.68 1.8 1.99 2.71 2.24l-1.68 2.02h0c-0.75-0.37-2.03-1.13-2.72-2.21l1.69-2.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiApachesuperset;
