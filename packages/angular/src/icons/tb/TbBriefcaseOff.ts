import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-briefcase-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBriefcaseOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 7h8a2 2 0 0 1 2 2v8m-1.17 2.82a1.99 1.99 0 0 1 -0.83 0.18h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2"}],["path",{"d":"M8.19 4.16a2 2 0 0 1 1.82 -1.16h4a2 2 0 0 1 2 2v2"}],["path",{"d":"M12 12v0.01"}],["path",{"d":"M3 13a20 20 0 0 0 11.91 1.93m3.26 -0.76a20 20 0 0 0 2.83 -1.16"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBriefcaseOff;
