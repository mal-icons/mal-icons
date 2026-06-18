import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chisel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChisel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 14l1.5 1.5"}],["path",{"d":"M18.35 15.58l2.08 2.08a1.96 1.96 0 0 1 -2.77 2.77l-2.08 -2.08a1.96 1.96 0 0 1 2.77 -2.77"}],["path",{"d":"M3 6l3 -3l7.41 7.41a2 2 0 0 1 0.59 1.41v2.17h-2.17a2 2 0 0 1 -1.41 -0.59l-7.41 -7.41"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChisel;
