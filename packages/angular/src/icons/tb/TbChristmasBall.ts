import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-christmas-ball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChristmasBall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 13a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"}],["path",{"d":"M11 5l1 -2l1 2"}],["path",{"d":"M4.51 10.16c2.5 -1.1 4.99 -0.82 7.49 0.84c2.63 1.75 5.26 1.97 7.88 0.65"}],["path",{"d":"M4.32 15.25c2.56 -1.21 5.12 -0.96 7.69 0.75c2.29 1.53 4.59 1.89 6.88 1.08"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChristmasBall;
