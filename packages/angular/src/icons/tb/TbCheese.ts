import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cheese",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCheese {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.52 20.01l16.48 -0.01v-3.5a2 2 0 1 1 0 -4v-3.5h-16.72"}],["path",{"d":"M21 9l-9.38 -4.99c-2.51 0.12 -4.76 1.42 -6.33 3.43c-1.42 1.82 -2.29 4.22 -2.29 6.85c0 2.12 0.56 4.09 1.52 5.72"}],["path",{"d":"M15 13v0.01"}],["path",{"d":"M8 13v0.01"}],["path",{"d":"M11 16v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCheese;
