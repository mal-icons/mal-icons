import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-topology-bus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTopologyBus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M2 16h20"}],["path",{"d":"M4 12v4"}],["path",{"d":"M12 12v4"}],["path",{"d":"M20 12v4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTopologyBus;
