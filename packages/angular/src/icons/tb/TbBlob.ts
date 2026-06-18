import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-blob",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBlob {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.9 20.19c1.67 0.75 3.9 0.81 6.1 0.81s4.43 -0.06 6.1 -0.81c0.87 -0.39 1.61 -0.98 2.13 -1.86c0.51 -0.86 0.76 -1.94 0.76 -3.23c0 -2.58 -0.98 -5.31 -2.56 -7.42c-1.57 -2.09 -3.83 -3.68 -6.44 -3.68s-4.87 1.59 -6.44 3.68c-1.57 2.1 -2.56 4.84 -2.56 7.42c0 1.3 0.25 2.37 0.76 3.23c0.52 0.87 1.26 1.46 2.13 1.86"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBlob;
