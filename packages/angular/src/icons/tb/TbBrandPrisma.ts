import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-prisma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandPrisma {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.19 16.2l3.62 5.31c0.27 0.39 0.75 0.57 1.22 0.45l10.17 -2.72a1.09 1.09 0 0 0 0.71 -1.51l-7.5 -15.48a0.45 0.45 0 0 0 -0.79 -0.03l-7.45 12.84a1.07 1.07 0 0 0 0.04 1.15l0 0"}],["path",{"d":"M8.5 22l3.5 -20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandPrisma;
