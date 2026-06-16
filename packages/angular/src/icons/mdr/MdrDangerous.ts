import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-dangerous",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDangerous {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.9 3H9.1c-0.53 0-1.040.21-1.420.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 0.530.21 1.040.59 1.41l4.1 4.1c0.370.380.880.59 1.410.59h5.8c0.53 0 1.04-0.21 1.41-0.59l4.1-4.1c0.38-0.370.59-0.880.59-1.41V9.1c0-0.53-0.21-1.04-0.59-1.41l-4.1-4.1c-0.37-0.38-0.88-0.59-1.41-0.59zm0.64 12.54a11 0 0 1-1.41 0L12 13.41l-2.12 2.12a11 0 1 1-1.41-1.41L10.59 12 8.46 9.88a11 0 1 1 1.41-1.41L12 10.59l2.12-2.12a11 0 1 1 1.41 1.41L13.41 12l2.12 2.12c0.40.390.4 1.030.01 1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDangerous;
