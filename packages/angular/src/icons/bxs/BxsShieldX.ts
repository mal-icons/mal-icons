import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-shield-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsShieldX {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.49 21.77c0.290.160.660.160.960 8.01-4.3 8.58-12.71 8.57-15.1a0.990.99 0 0 0-0.6-0.9l-8.05-3.56a1 1 0 0 0-0.810L3.57 5.77a0.990.99 0 0 0-0.590.89c-0.03 2.380.45 10.81 8.51 15.12zM8.29 9.71l1.41-1.41L12 10.59l2.29-2.29 1.41 1.41L13.41 12l2.29 2.29-1.41 1.41L12 13.41l-2.29 2.29-1.41-1.41L10.59 12 8.29 9.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsShieldX;
