import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-box-align-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBoxAlignTop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 10.01h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5"}],["path",{"d":"M4 15.01v-0.01"}],["path",{"d":"M4 20.01v-0.01"}],["path",{"d":"M9 20.01v-0.01"}],["path",{"d":"M15 20.01v-0.01"}],["path",{"d":"M20 20.01v-0.01"}],["path",{"d":"M20 15.01v-0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBoxAlignTop;
