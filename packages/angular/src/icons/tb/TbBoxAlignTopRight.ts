import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-box-align-top-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBoxAlignTopRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1"}],["path",{"d":"M20 15.01v-0.01"}],["path",{"d":"M20 20.01v-0.01"}],["path",{"d":"M15 20.01v-0.01"}],["path",{"d":"M9 20.01v-0.01"}],["path",{"d":"M9 4.01v-0.01"}],["path",{"d":"M4 20.01v-0.01"}],["path",{"d":"M4 15.01v-0.01"}],["path",{"d":"M4 9.01v-0.01"}],["path",{"d":"M4 4.01v-0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBoxAlignTopRight;
