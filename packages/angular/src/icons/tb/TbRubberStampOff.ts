import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-rubber-stamp-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRubberStampOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.27 8.27c0.81 2.34 2.86 5.53 -1.48 5.53c-2.37 0 -3.79 0 -3.79 4.05h14.85"}],["path",{"d":"M5 21h14"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M8.71 4.72a3.99 3.99 0 0 1 3.29 -1.72a4 4 0 0 1 4 4c0 0.99 -0.81 2.46 -1.22 3.79m6.2 6.2c-0.18 -2.88 -1.33 -3.15 -3.17 -3.18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRubberStampOff;
