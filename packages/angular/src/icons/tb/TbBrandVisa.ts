import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-visa",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandVisa {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 15l-1 -6l-2.5 6"}],["path",{"d":"M9 15l1 -6"}],["path",{"d":"M3 9h1v6h0.5l2.5 -6"}],["path",{"d":"M16 9.5a0.5 0.5 0 0 0 -0.5 -0.5h-0.75c-0.72 0 -1.34 0.52 -1.45 1.23l-0.09 0.53a1.06 1.06 0 0 0 1.05 1.23a1.06 1.06 0 0 1 1.05 1.23l-0.09 0.53a1.48 1.48 0 0 1 -1.45 1.23h-0.75a0.5 0.5 0 0 1 -0.5 -0.5"}],["path",{"d":"M18 14h2.7"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandVisa;
