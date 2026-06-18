import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-world-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWorldOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.66 5.62a9 9 0 1 0 12.72 12.74m1.67 -2.32a9 9 0 0 0 -12.07 -12.08"}],["path",{"d":"M3.6 9h5.4m4 0h7.4"}],["path",{"d":"M3.6 15h11.4m4 0h1.4"}],["path",{"d":"M11.5 3a17 17 0 0 0 -1.49 3.02m-0.85 3.15c-0.68 4.03 0.1 8.24 2.34 11.83"}],["path",{"d":"M12.5 3a16.98 16.98 0 0 1 2.55 8.01m-0.21 3.82a16.98 16.98 0 0 1 -2.34 6.18"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWorldOff;
