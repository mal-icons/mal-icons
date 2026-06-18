import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-network",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbNetwork {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0"}],["path",{"d":"M12 3c1.33 0.33 2 2.33 2 6s-0.67 5.67 -2 6"}],["path",{"d":"M12 3c-1.33 0.33 -2 2.33 -2 6s0.67 5.67 2 6"}],["path",{"d":"M6 9h12"}],["path",{"d":"M3 20h7"}],["path",{"d":"M14 20h7"}],["path",{"d":"M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 15v3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbNetwork;
