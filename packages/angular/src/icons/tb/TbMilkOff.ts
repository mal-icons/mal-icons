import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-milk-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMilkOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 6h6v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1"}],["path",{"d":"M16 6l1.09 1.76a6 6 0 0 1 0.91 3.17v3.07m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.07a6 6 0 0 1 0.91 -3.17l0.33 -0.52"}],["path",{"d":"M10 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMilkOff;
