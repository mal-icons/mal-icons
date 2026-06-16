import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-badge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdBadge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 12h4v1.5h-4zm0 3h4v1.5h-4z"}],["path",{"d":"M20 7h-5V4c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v3H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2h5v11z"}],["circle",{"cx":"9","cy":"13.5","r":"1.5"}],["path",{"d":"M11.08 16.18c-0.64-0.28-1.34-0.43-2.08-0.43s-1.440.15-2.080.43c-0.560.24-0.920.78-0.92 1.39V18h6v-0.43c0-0.61-0.36-1.15-0.92-1.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdBadge;
