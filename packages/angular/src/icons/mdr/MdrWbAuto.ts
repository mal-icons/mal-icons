import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-wb-auto",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWbAuto {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.85 12.65h2.3L8 9zM22.72 7c-0.42 0-0.770.3-0.850.7l-1.07 5.59-1.31-5.51c-0.11-0.46-0.52-0.78-0.99-0.78s-0.880.32-0.980.78l-1.31 5.51-1.07-5.59c-0.08-0.4-0.44-0.7-0.85-0.7-0.01 0-0.030.01-0.040.01A8 8 0 0 0 0 12c0 4.42 3.58 8 8 8 3.17 0 5.9-1.85 7.2-4.52a1.1 1.1 0 0 0 2.01-0.32L18.5 9.9l1.29 5.26c0.120.490.570.84 1.070.840.52 0 0.96-0.36 1.08-0.86l1.61-7.08A0.860.86 0 0 0 22.72 7zm-11.79 9c-0.38 0-0.72-0.24-0.84-0.6L9.6 14H6.4l-0.49 1.4c-0.130.36-0.460.6-0.840.6a0.890.89 0 0 1-0.84-1.19l2.44-6.86C6.87 7.38 7.4 7 8 7s1.130.38 1.340.94l2.44 6.86c0.20.59-0.23 1.2-0.85 1.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWbAuto;
