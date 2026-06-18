import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-flame-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFlameOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.97 8.97c-0.33 0.38 -0.67 0.72 -0.97 1.03c-1.23 1.26 -2 3.24 -2 5a6 6 0 0 0 11.47 2.47m0.38 -3.6c-0.32 -1.41 -1.12 -3.04 -1.85 -3.87c-0.28 0.47 -0.54 0.87 -0.79 1.2m-2.36 -2.35c-0.07 -2.16 -1.18 -4.18 -1.85 -4.85c0 0.97 -0.18 1.8 -0.46 2.53"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFlameOff;
