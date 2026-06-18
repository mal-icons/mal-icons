import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-angular",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAngular {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.43 17.25l6.08 3.47a1 1 0 0 0 0.99 0l6.08 -3.47a1 1 0 0 0 0.5 -0.73l1.32 -9.7a1 1 0 0 0 -0.66 -1.08l-7.4 -2.61a1 1 0 0 0 -0.66 0l-7.4 2.61a1 1 0 0 0 -0.66 1.08l1.32 9.7a1 1 0 0 0 0.5 0.73l0 0"}],["path",{"d":"M9 15l3 -8l3 8"}],["path",{"d":"M10 13h4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAngular;
