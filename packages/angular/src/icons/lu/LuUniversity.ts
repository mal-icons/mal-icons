import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-university",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuUniversity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{"d":"M18 12h0.01"}],["path",{"d":"M18 16h0.01"}],["path",{"d":"M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.14-0.36L13.14 2.36a2 2 0 0 0-2.290L6.14 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"}],["path",{"d":"M6 12h0.01"}],["path",{"d":"M6 16h0.01"}],["circle",{"cx":"12","cy":"10","r":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuUniversity;
