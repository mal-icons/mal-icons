import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-tools-kitchen-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbToolsKitchenOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 3h5l-0.5 4.5m-0.4 3.6l-0.1 0.91h-6l-0.87 -7.87"}],["path",{"d":"M7 18h2v3h-2v-3"}],["path",{"d":"M15.23 11.22c0.42 -2.52 1.59 -5.18 4.78 -8.22v12h-1"}],["path",{"d":"M20 15v1m0 4v1h-1v-2"}],["path",{"d":"M8 12v6"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbToolsKitchenOff;
