import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-time-duration-10",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTimeDuration10 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 9v6"}],["path",{"d":"M12 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0"}],["path",{"d":"M3 12v0.01"}],["path",{"d":"M21 12v0.01"}],["path",{"d":"M12 21v0.01"}],["path",{"d":"M7.5 4.2v0.01"}],["path",{"d":"M16.5 19.8v0.01"}],["path",{"d":"M7.5 19.8v0.01"}],["path",{"d":"M4.2 16.5v0.01"}],["path",{"d":"M19.8 16.5v0.01"}],["path",{"d":"M4.2 7.5v0.01"}],["path",{"d":"M19.81 7.53a8.99 8.99 0 0 0 -7.81 -4.53"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTimeDuration10;
