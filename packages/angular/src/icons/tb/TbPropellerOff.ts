import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-propeller-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPropellerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.45 10.43a3 3 0 1 0 4.11 4.14"}],["path",{"d":"M14.27 10.27c0.66 -1.46 1.06 -2.89 1.2 -4.29c0.22 -1.63 -0.76 -2.99 -3.47 -2.99c-1.94 0 -3 0.7 -3.35 1.69m0.7 4.65c0.14 0.38 0.31 0.77 0.49 1.16"}],["path",{"d":"M13.17 16.75c0.97 1.4 2.06 2.52 3.26 3.39c1.02 0.79 2.27 0.85 3.41 -0.29m1.48 -2.49c0.49 -1.63 -0.19 -2.73 -1.42 -3.23c-0.82 -0.37 -1.7 -0.65 -2.65 -0.85"}],["path",{"d":"M8.66 13c-1.69 0.14 -3.21 0.52 -4.56 1.13c-1.52 0.62 -2.21 2.15 -0.85 4.5s3.02 2.52 4.32 1.51c1.2 -0.86 2.29 -1.99 3.26 -3.39"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPropellerOff;
