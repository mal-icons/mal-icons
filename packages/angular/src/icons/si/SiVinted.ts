import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vinted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVinted {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.32 0c-0.26 0-0.570.22-1.410.95-0.30.11-0.630.03-1.010.61-2.15 3.09-3.82 14.65-5.25 17.98-0.29-1.44-0.88-10.84-1.12-13.41-0.03-0.480.03-1.080.03-1.43 0-2.37-0.52-3.57-2.89-3.57-1.2 0-2.380.44-3.01 1.23-0.30.41-0.410.71-0.41 1.44 0 4.92 1.17 12.97 2.48 18.23C7.13 23.69 8.6 24 9.99 24c0.65 0 1.31-0.08 2.23-0.54 3.21-1.57 4.07-5.84 4.9-9.990.15-0.750.9-4.37 1.25-6.270.48-2.6 1.02-5.54 1.35-6.62C19.830.25 19.63 0 19.32 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVinted;
