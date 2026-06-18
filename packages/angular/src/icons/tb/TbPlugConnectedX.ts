import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-plug-connected-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPlugConnectedX {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 16l-4 4"}],["path",{"d":"M7 12l5 5l-1.5 1.5a3.54 3.54 0 1 1 -5 -5l1.5 -1.5"}],["path",{"d":"M17 12l-5 -5l1.5 -1.5a3.54 3.54 0 1 1 5 5l-1.5 1.5"}],["path",{"d":"M3 21l2.5 -2.5"}],["path",{"d":"M18.5 5.5l2.5 -2.5"}],["path",{"d":"M10 11l-2 2"}],["path",{"d":"M13 14l-2 2"}],["path",{"d":"M16 16l4 4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPlugConnectedX;
