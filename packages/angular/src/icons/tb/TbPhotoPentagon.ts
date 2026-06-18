import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-photo-pentagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPhotoPentagon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.16 2.17l8.02 5.83c0.69 0.5 0.98 1.4 0.72 2.21l-3.06 9.43a1.98 1.98 0 0 1 -1.88 1.37h-9.92a1.98 1.98 0 0 1 -1.88 -1.37l-3.06 -9.43a1.98 1.98 0 0 1 0.72 -2.21l8.02 -5.83a1.98 1.98 0 0 1 2.33 0"}],["path",{"d":"M15 8h0.01"}],["path",{"d":"M4 15l4 -4c0.93 -0.89 2.07 -0.89 3 0l5 5"}],["path",{"d":"M14 14l1 -1c0.93 -0.89 2.07 -0.89 3 0l2 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPhotoPentagon;
