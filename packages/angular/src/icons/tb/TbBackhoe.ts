import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-backhoe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBackhoe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M13 19l-9 0"}],["path",{"d":"M4 15l9 0"}],["path",{"d":"M8 12v-5h2a3 3 0 0 1 3 3v5"}],["path",{"d":"M5 15v-2a1 1 0 0 1 1 -1h7"}],["path",{"d":"M21.12 9.88l-3.12 -4.88l-5 5"}],["path",{"d":"M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -0.88l4.24 -4.24"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBackhoe;
