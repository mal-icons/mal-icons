import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-calculator-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCalculatorOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.82 19.82a2 2 0 0 1 -1.82 1.18h-12a2 2 0 0 1 -2 -2v-14c0 -0.29 0.06 -0.57 0.18 -0.83m2.82 -1.17h11a2 2 0 0 1 2 2v11"}],["path",{"d":"M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1"}],["path",{"d":"M8 14v0.01"}],["path",{"d":"M12 14v0.01"}],["path",{"d":"M8 17v0.01"}],["path",{"d":"M12 17v0.01"}],["path",{"d":"M16 17v0.01"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCalculatorOff;
