import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-octahedron",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbOctahedron {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.86 21.65l8.85 -8.95a0.98 0.98 0 0 0 0 -1.41l-8.85 -8.95a1.23 1.23 0 0 0 -1.72 0l-8.85 8.95a0.98 0.98 0 0 0 0 1.41l8.85 8.95a1.23 1.23 0 0 0 1.72 0"}],["path",{"d":"M2 12c0 0.09 0.1 0.18 0.3 0.25l8.85 2.63c0.46 0.16 1.26 0.16 1.72 0l8.85 -2.63c0.2 -0.07 0.29 -0.16 0.3 -0.24"}],["path",{"d":"M12 2.12v19.76"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbOctahedron;
