import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-auth0",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAuth0 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 14.5l-5.5 3.5l2 -6l-4.5 -4h6l2 -5l2 5h6l-4.5 4l2 6l-5.5 -3.5"}],["path",{"d":"M20.51 8.87l-2.01 -5.87h-12.99l-2.01 5.87c-1.24 3.59 -0.13 7.09 3.25 9.41l5.26 3.72l5.26 -3.72c3.39 -2.31 4.49 -5.81 3.25 -9.41"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAuth0;
