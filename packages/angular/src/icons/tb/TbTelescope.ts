import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-telescope",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTelescope {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 21l6 -5l6 5"}],["path",{"d":"M12 13v8"}],["path",{"d":"M3.29 13.68l0.17 0.28c0.52 0.88 1.62 1.26 2.61 0.91l14.24 -5.16a1.02 1.02 0 0 0 0.56 -1.46l-2.62 -4.7a1.09 1.09 0 0 0 -1.45 -0.42l-0.06 0.03l-12.69 7.62c-1.02 0.61 -1.36 1.9 -0.76 2.91l0 0"}],["path",{"d":"M14 5l3 5.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTelescope;
