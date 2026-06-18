import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-disc-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDiscOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.04 16.04a9 9 0 0 0 -12.08 -12.08m-2.33 1.69a9 9 0 0 0 6.37 15.36c2.49 0 4.73 -1 6.36 -2.63"}],["path",{"d":"M11.3 11.29a1 1 0 1 0 1.4 1.43"}],["path",{"d":"M7 12c0 -1.38 0.56 -2.63 1.46 -3.53m2.61 -1.38c0.3 -0.06 0.61 -0.09 0.93 -0.09"}],["path",{"d":"M12 17a4.99 4.99 0 0 0 3.55 -1.48m1.36 -2.59c0.06 -0.3 0.09 -0.61 0.09 -0.93"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDiscOff;
