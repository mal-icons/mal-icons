import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-amie",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAmie {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 8.5c0 1.33 0.47 2.55 1.26 3.5a5.5 5.5 0 0 0 7.74 7.74a5.5 5.5 0 0 0 7.74 -7.74a5.5 5.5 0 0 0 -7.74 -7.74a5.5 5.5 0 0 0 -9 4.24"}],["path",{"d":"M10 9.5c0 -0.83 0.9 -1.5 2 -1.5s2 0.67 2 1.5v5c0 0.83 -0.89 1.5 -2 1.5s-2 -0.67 -2 -1.5l0 -5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAmie;
