import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-engine-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbEngineOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 10v6"}],["path",{"d":"M12 5v3"}],["path",{"d":"M10 5h4"}],["path",{"d":"M5 13h-2"}],["path",{"d":"M16 16h-1v2a1 1 0 0 1 -1 1h-3.46a1 1 0 0 1 -0.83 -0.44l-1.7 -2.56h-2v-6h2l0.99 -0.99m3.01 -1.01h1.38a1 1 0 0 1 0.89 0.55l1.45 2.89a1 1 0 0 0 0.89 0.55h1.38v-2h2a1 1 0 0 1 1 1v6"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbEngineOff;
