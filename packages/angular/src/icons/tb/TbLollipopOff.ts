import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-lollipop-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLollipopOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.46 7.49a7 7 0 0 0 9.06 9.04m2.42 -1.57a7 7 0 1 0 -9.88 -9.91"}],["path",{"d":"M21 10a3.5 3.5 0 0 0 -7 0"}],["path",{"d":"M12.71 12.72a3.5 3.5 0 0 1 -5.71 -2.71"}],["path",{"d":"M14 17c0.84 0 1.61 -0.29 2.21 -0.78m1.29 -2.71a3.5 3.5 0 0 0 -3.5 -3.5"}],["path",{"d":"M14 3a3.5 3.5 0 0 0 -3.5 3.5"}],["path",{"d":"M3 21l6 -6"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLollipopOff;
