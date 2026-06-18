import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-lemon-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLemon2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 4a2 2 0 0 1 1.19 3.61c1.55 2.94 0.87 6.92 -1.89 9.68c-2.76 2.77 -6.74 3.44 -9.68 1.89a2 2 0 1 1 -2.8 -2.8c-1.55 -2.94 -0.87 -6.92 1.89 -9.68c2.77 -2.76 6.74 -3.44 9.68 -1.89a2 2 0 0 1 1.61 -0.81"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLemon2;
