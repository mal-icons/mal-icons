import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-storm-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbStormOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.88 9.87a3 3 0 1 0 4.24 4.25m0.57 -3.44a3.01 3.01 0 0 0 -1.41 -1.39"}],["path",{"d":"M7.04 7.06a7 7 0 0 0 9.91 9.89m1.59 -2.43a7 7 0 0 0 -9.06 -9.06"}],["path",{"d":"M5.37 14.24c-1.6 -3.43 -1.6 -6.67 -1 -9.85"}],["path",{"d":"M18.63 9.76a14.32 14.32 0 0 1 1.37 6.25m-0.37 3.61c-0.09 0.46 -0.19 0.92 -0.29 1.38"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbStormOff;
