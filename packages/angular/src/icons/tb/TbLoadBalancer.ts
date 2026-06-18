import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-load-balancer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLoadBalancer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M12 16v3"}],["path",{"d":"M12 10v-7"}],["path",{"d":"M9 6l3 -3l3 3"}],["path",{"d":"M12 10v-7"}],["path",{"d":"M9 6l3 -3l3 3"}],["path",{"d":"M14.89 12.23l6.11 -2.22"}],["path",{"d":"M17.16 8.21l3.85 1.79l-1.79 3.85"}],["path",{"d":"M9.1 12.21l-6.07 -2.21"}],["path",{"d":"M6.87 8.21l-3.84 1.79l1.79 3.85"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLoadBalancer;
