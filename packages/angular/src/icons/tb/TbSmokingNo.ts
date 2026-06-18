import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-smoking-no",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSmokingNo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 13l0 4"}],["path",{"d":"M16 5v0.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v0.5"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M17 13h3a1 1 0 0 1 1 1v2c0 0.28 -0.11 0.53 -0.3 0.71m-3.7 0.29h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSmokingNo;
