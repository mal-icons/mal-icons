import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-teapot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTeapot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.29 3h3.42a2 2 0 0 1 1.99 1.78l1.56 14a2 2 0 0 1 -1.99 2.22h-6.53a2 2 0 0 1 -1.99 -2.22l1.56 -14a2 2 0 0 1 1.99 -1.78"}],["path",{"d":"M7.47 12.5l-4.26 -5.02a0.9 0.9 0 0 1 0.69 -1.48h13.09a3 3 0 0 1 3.01 3v3c0 1.66 -1.35 3 -3.01 3"}],["path",{"d":"M7 17h10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTeapot;
