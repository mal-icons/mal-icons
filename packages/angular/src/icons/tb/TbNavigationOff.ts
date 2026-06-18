import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-navigation-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbNavigationOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.28 12.28c-0.95 -2.06 -2.38 -5.16 -4.28 -9.28c-0.7 1.52 -1.22 2.65 -1.57 3.41m-1.27 2.75c-0.88 1.91 -2.59 5.62 -5.13 11.12c-0.07 0.2 -0.02 0.42 0.14 0.57c0.15 0.15 0.37 0.19 0.57 0.12l7.27 -2.46l7.27 2.46c0.2 0.08 0.42 0.03 0.57 -0.12a0.55 0.55 0 0 0 0.13 -0.57l-0.26 -0.56"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbNavigationOff;
