import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-fish",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFish {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.69 7.44a6.97 6.97 0 0 0 -1.69 4.56c0 1.75 0.64 3.35 1.7 4.57"}],["path",{"d":"M2 9.5c7.72 8.65 14.75 10.27 20 2.5c-5.25 -7.76 -12.28 -6.14 -20 2.5"}],["path",{"d":"M18 11v0.01"}],["path",{"d":"M11.5 10.5c-0.67 1 -0.67 2 0 3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFish;
