import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cannabis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCannabis {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 20s0 -2 1 -3.5c-1.5 0 -2 -0.5 -4 -1.5c0 0 1.84 -1.38 5 -1c-1.79 -0.97 -3.28 -2.03 -5 -6c0 0 3.98 -0.3 6.5 3.5c-2.28 -4.9 1.5 -9.5 1.5 -9.5c2.73 5.47 2.39 7.5 1.5 9.5c2.53 -3.77 6.5 -3.5 6.5 -3.5c-1.72 3.97 -3.21 5.03 -5 6c3.16 -0.38 5 1 5 1c-2 1 -2.5 1.5 -4 1.5c1 1.5 1 3.5 1 3.5c-2 0 -4.44 -2.22 -5 -3c-0.56 0.78 -3 3 -5 3"}],["path",{"d":"M12 22v-5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCannabis;
