import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-server-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbServerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12h-6a3 3 0 0 1 -3 -3v-2c0 -1.08 0.57 -2.03 1.44 -2.56m3.57 -0.44h10a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2"}],["path",{"d":"M16 12h2a3 3 0 0 1 3 3v2m-1.45 2.57a2.99 2.99 0 0 1 -1.55 0.43h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h6"}],["path",{"d":"M7 8v0.01"}],["path",{"d":"M7 16v0.01"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbServerOff;
