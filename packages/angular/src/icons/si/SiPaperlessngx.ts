import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-paperlessngx",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPaperlessngx {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.34 23.03c-0.12-0.56-0.35-1.68-0.38-1.68-4.98-2.97-4.39-8.13-2.74-11.070.35 3.71 6.92 6.27 3.09 10.81-0.030.060.180.770.35 1.410.77-1.3 1.92-2.86 1.86-3C3.81 8.01 18.53 7.13 21.59 0c1.39 6.89-0.71 17.55-12.54 20.26-0.060.03-2.15 3.71-2.24 3.74 0-0.06-0.88-0.03-0.77-0.320.06-0.180.18-0.410.29-0.65zm-0.15-2.77c1.5-1.74-0.26-4.71-1.32-5.68 1.8 3.09 1.68 4.89 1.33 5.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPaperlessngx;
