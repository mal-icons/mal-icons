import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-foursquare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandFoursquare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 3h10c0.64 0 1.11 0.7 0.98 1.33l-1.98 9.86a1.01 1.01 0 0 1 -1 0.81h-2.25c-0.31 0 -0.6 0.14 -0.79 0.38l-4.14 5.25c-0.6 0.75 -1.81 0.33 -1.81 -0.63v-16c0 -0.56 0.44 -1 1 -1l0.01 0"}],["path",{"d":"M12 9l5 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandFoursquare;
