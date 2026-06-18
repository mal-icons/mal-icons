import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-uptimekuma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUptimekuma {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.760.96c-4.07 0-7.93 2.27-10.06 5.77l-0.160.26-0.120.28c-1.81 4.44-2.19 9.120.62 12.46 2.67 3.17 6.22 3.33 9.48 3.31 3.26-0.02 6.32-0.48 8.99-2.03C22.75 19.71 24 16.92 24 14.53c0-2.39-0.72-4.7-1.88-7.34l-0.11-0.26-0.15-0.24C19.68 3.2 15.830.96 11.760.96Zm0 3.87c2.92 0 5.19 1.31 6.82 3.91 2.08 4.75 2.08 7.72 0 8.93-3.12 1.81-11.23 2.36-13.57-0.42-1.56-1.85-1.56-4.69 0-8.51 1.58-2.61 3.84-3.91 6.75-3.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUptimekuma;
