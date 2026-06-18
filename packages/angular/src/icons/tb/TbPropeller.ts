import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-propeller",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPropeller {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14.17 10.5c0.72 -1.54 1.16 -3.04 1.3 -4.51c0.22 -1.63 -0.76 -2.99 -3.47 -2.99s-3.69 1.36 -3.47 2.99c0.15 1.47 0.58 2.98 1.3 4.51"}],["path",{"d":"M13.17 16.75c0.97 1.4 2.06 2.52 3.26 3.39c1.3 1 2.97 0.83 4.32 -1.51c1.35 -2.35 0.67 -3.87 -0.85 -4.5c-1.35 -0.61 -2.87 -0.98 -4.56 -1.13"}],["path",{"d":"M8.66 13c-1.69 0.14 -3.21 0.52 -4.56 1.13c-1.52 0.62 -2.21 2.15 -0.85 4.5s3.02 2.52 4.32 1.51c1.2 -0.86 2.29 -1.99 3.26 -3.39"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPropeller;
