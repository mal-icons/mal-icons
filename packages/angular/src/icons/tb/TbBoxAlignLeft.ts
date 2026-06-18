import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-box-align-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBoxAlignLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 20v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5"}],["path",{"d":"M15 20h-0.01"}],["path",{"d":"M20 20h-0.01"}],["path",{"d":"M20 15h-0.01"}],["path",{"d":"M20 9h-0.01"}],["path",{"d":"M20 4h-0.01"}],["path",{"d":"M15 4h-0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBoxAlignLeft;
