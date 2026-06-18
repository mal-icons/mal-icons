import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-eye-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbEyeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.59 10.59a2 2 0 0 0 2.83 2.83"}],["path",{"d":"M16.68 16.67a8.72 8.72 0 0 1 -4.68 1.33c-3.6 0 -6.6 -2 -9 -6c1.27 -2.12 2.71 -3.68 4.32 -4.67m2.86 -1.15a9.06 9.06 0 0 1 1.82 -0.18c3.6 0 6.6 2 9 6c-0.67 1.11 -1.38 2.07 -2.14 2.87"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbEyeOff;
