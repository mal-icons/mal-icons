import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-topology-ring-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTopologyRing2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M7 18h10"}],["path",{"d":"M18 16l-5 -8"}],["path",{"d":"M11 8l-5 8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTopologyRing2;
