import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-magnetic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMagnetic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3v18"}],["path",{"d":"M18 7c-0.63 -1.25 -1.54 -2 -2.5 -2c-1.93 0 -3.5 3.13 -3.5 7s1.57 7 3.5 7s3.5 -3.13 3.5 -7v-1"}],["path",{"d":"M6 7c0.63 -1.25 1.54 -2 2.5 -2c1.93 0 3.5 3.13 3.5 7s-1.57 7 -3.5 7s-3.5 -3.13 -3.5 -7v-1"}],["path",{"d":"M3 13l2 -2l2 2"}],["path",{"d":"M17 13l2 -2l2 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMagnetic;
