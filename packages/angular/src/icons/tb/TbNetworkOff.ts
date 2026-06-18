import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-network-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbNetworkOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.53 6.54a6 6 0 0 0 7.94 7.93m2.25 -1.76a6 6 0 0 0 -8.43 -8.43"}],["path",{"d":"M12 3c1.33 0.33 2 2.33 2 6c0 0.34 -0.01 0.66 -0.02 0.97m-0.55 3.47c-0.33 0.88 -0.81 1.4 -1.43 1.56"}],["path",{"d":"M12 3c-0.94 0.23 -1.54 1.29 -1.82 3.17m-0.16 3.84c0.12 3.03 0.78 4.7 1.98 5"}],["path",{"d":"M6 9h3m4 0h5"}],["path",{"d":"M3 20h7"}],["path",{"d":"M14 20h7"}],["path",{"d":"M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 15v3"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbNetworkOff;
