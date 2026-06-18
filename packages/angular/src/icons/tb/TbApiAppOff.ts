import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-api-app-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbApiAppOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 15h-6.5a2.5 2.5 0 1 1 0 -5h0.5"}],["path",{"d":"M15 15v3.5a2.5 2.5 0 1 1 -5 0v-0.5"}],["path",{"d":"M13 9h5.5a2.5 2.5 0 1 1 0 5h-0.5"}],["path",{"d":"M9 12v-3m0.04 -3.96a2.5 2.5 0 0 1 4.96 0.46v0.5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbApiAppOff;
