import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-discount",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDiscount {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.79 21 3 11.21v2c0 0.530.21 1.040.59 1.41l7.79 7.79c0.780.78 2.050.78 2.83 0l6.21-6.21c0.78-0.780.78-2.05 0-2.83L12.79 21z"}],["path",{"d":"M11.38 17.41c0.780.78 2.050.78 2.83 0l6.21-6.21c0.78-0.780.78-2.05 0-2.83L12.630.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 0.9 3 2v6.21c0 0.530.21 1.040.59 1.41l7.79 7.79zM7.25 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDiscount;
