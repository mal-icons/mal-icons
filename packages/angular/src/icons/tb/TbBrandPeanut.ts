import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-peanut",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandPeanut {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 16.25l-0.82 -0.36l-0.46 -0.2c-1.44 -0.59 -2 -0.59 -3.45 0l-0.46 0.2l-0.82 0.36a4.5 4.5 0 1 1 0 -8.49l1.05 0.46l0.43 0.18c1.29 0.51 1.86 0.48 3.24 -0.08l0.46 -0.19l0.82 -0.36a4.5 4.5 0 1 1 0 8.49"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandPeanut;
