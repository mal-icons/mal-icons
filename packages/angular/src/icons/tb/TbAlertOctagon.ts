import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-alert-octagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAlertOctagon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.8 2.17l5.58 2.39c0.48 0.21 0.86 0.59 1.07 1.07l2.39 5.57c0.22 0.51 0.22 1.09 0 1.6l-2.39 5.58c-0.21 0.48 -0.59 0.86 -1.07 1.07l-5.57 2.39c-0.51 0.22 -1.09 0.22 -1.6 0l-5.57 -2.39a2.04 2.04 0 0 1 -1.07 -1.07l-2.39 -5.57a2.04 2.04 0 0 1 0 -1.6l2.39 -5.57c0.21 -0.48 0.59 -0.86 1.07 -1.07l5.57 -2.39a2.04 2.04 0 0 1 1.6 0"}],["path",{"d":"M12 8v4"}],["path",{"d":"M12 16h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAlertOctagon;
