import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-check-shield",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCheckShield {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.49 21.75c0.290.160.660.160.960 8.01-4.3 8.58-12.71 8.57-15.1a0.990.99 0 0 0-0.6-0.9l-8.05-3.57a1 1 0 0 0-0.810L3.57 5.75a0.990.99 0 0 0-0.590.89c-0.03 2.380.45 10.81 8.51 15.12zM8.67 10.29l2.29 2.29 4.29-4.29 1.41 1.41-5.71 5.71-3.71-3.71 1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCheckShield;
