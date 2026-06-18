import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-bumble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandBumble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 12h10"}],["path",{"d":"M9 8h6"}],["path",{"d":"M10 16h4"}],["path",{"d":"M16.27 3h-8.54a1.46 1.46 0 0 0 -1.27 0.75l-4.27 7.51a1.51 1.51 0 0 0 0 1.49l4.27 7.51c0.26 0.46 0.74 0.75 1.27 0.75h8.54a1.46 1.46 0 0 0 1.27 -0.75l4.27 -7.51a1.51 1.51 0 0 0 0 -1.49l-4.27 -7.51a1.46 1.46 0 0 0 -1.27 -0.75"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandBumble;
