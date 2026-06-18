import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-dumpling",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDumpling {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.53 5.53a2.53 2.53 0 0 1 2.56 -0.62a2.53 2.53 0 0 1 4.6 -0.72q 0.15 -0.24 0.36 -0.45a2.53 2.53 0 0 1 4.32 1.64a2.53 2.53 0 0 1 2.84 0.51l0.36 0.36c1.38 1.39 -0.7 5.71 -4.65 9.67c-3.96 3.96 -8.28 6.04 -9.67 4.66l-0.36 -0.36l-0.11 -0.12a2.53 2.53 0 0 1 -0.4 -2.72a2.53 2.53 0 0 1 -1.19 -4.67a2.53 2.53 0 0 1 0.72 -4.6a2.53 2.53 0 0 1 0.62 -2.56"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDumpling;
