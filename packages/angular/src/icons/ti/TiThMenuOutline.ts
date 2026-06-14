import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-th-menu-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiThMenuOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 18c0.55 0 1 0.45 1 1s-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1s0.45-1 1-1h14m0-2h-14c-1.65 0-3 1.35-3 3s1.35 3 3 3h14c1.65 0 3-1.35 3-3s-1.35-3-3-3zM19 11c0.55 0 1 0.45 1 1s-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1s0.45-1 1-1h14m0-2h-14c-1.65 0-3 1.35-3 3s1.35 3 3 3h14c1.65 0 3-1.35 3-3s-1.35-3-3-3zM19 4c0.55 0 1 0.45 1 1s-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1s0.45-1 1-1h14m0-2h-14c-1.65 0-3 1.35-3 3s1.35 3 3 3h14c1.65 0 3-1.35 3-3s-1.35-3-3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiThMenuOutline;
