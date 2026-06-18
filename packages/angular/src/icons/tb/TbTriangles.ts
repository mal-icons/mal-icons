import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-triangles",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTriangles {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.97 21h8.05a0.98 0.98 0 0 0 0.81 -1.52l-4.03 -6.05a0.97 0.97 0 0 0 -1.62 0l-4.03 6.05a0.98 0.98 0 0 0 0.81 1.52"}],["path",{"d":"M4.98 16h14.04c0.54 0 0.98 -0.44 0.98 -0.99a1 1 0 0 0 -0.16 -0.53l-7.02 -11.02a0.97 0.97 0 0 0 -1.65 0l-7.02 11.02a1 1 0 0 0 0.29 1.37a0.97 0.97 0 0 0 0.53 0.16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTriangles;
