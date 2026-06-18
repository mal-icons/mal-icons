import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-time-duration-5",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTimeDuration5 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 15h2a1.5 1.5 0 0 0 0 -3h-2v-3h3.5"}],["path",{"d":"M3 12v0.01"}],["path",{"d":"M21 12v0.01"}],["path",{"d":"M12 21v0.01"}],["path",{"d":"M7.5 4.2v0.01"}],["path",{"d":"M16.5 19.8v0.01"}],["path",{"d":"M7.5 19.8v0.01"}],["path",{"d":"M4.2 16.5v0.01"}],["path",{"d":"M19.8 16.5v0.01"}],["path",{"d":"M19.8 7.5v0.01"}],["path",{"d":"M4.2 7.5v0.01"}],["path",{"d":"M16.5 4.21a9.04 9.04 0 0 0 -4.5 -1.21"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTimeDuration5;
