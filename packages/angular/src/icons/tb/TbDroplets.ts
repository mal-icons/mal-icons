import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-droplets",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDroplets {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.07 20.3a3 3 0 0 0 3.86 0a3 3 0 0 0 0.67 -3.8l-2.1 -3.23a0.6 0.6 0 0 0 -1 0l-2.1 3.23a3 3 0 0 0 0.67 3.8"}],["path",{"d":"M16.07 20.3a3 3 0 0 0 3.86 0a3 3 0 0 0 0.67 -3.8l-2.1 -3.23a0.6 0.6 0 0 0 -1 0l-2.1 3.23a3 3 0 0 0 0.67 3.8"}],["path",{"d":"M10.07 10.3a3 3 0 0 0 3.86 0a3 3 0 0 0 0.67 -3.8l-2.1 -3.23a0.6 0.6 0 0 0 -1 0l-2.1 3.23a3 3 0 0 0 0.67 3.8l0 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDroplets;
