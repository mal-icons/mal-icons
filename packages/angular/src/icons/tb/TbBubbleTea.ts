import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-bubble-tea",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBubbleTea {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.95 9l-1.48 8.69c-0.25 1.46 -0.37 2.19 -0.94 2.63c-1.2 0.93 -6.04 0.88 -7.17 0c-0.56 -0.44 -0.69 -1.17 -0.94 -2.63l-1.48 -8.69"}],["path",{"d":"M6 9l0.51 -1.29a5.91 5.91 0 0 1 10.97 0l0.51 1.29"}],["path",{"d":"M5 9h14"}],["path",{"d":"M12 9l4 -7"}],["path",{"d":"M10.01 14h0.01"}],["path",{"d":"M11.02 18h0.01"}],["path",{"d":"M13.02 16h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBubbleTea;
