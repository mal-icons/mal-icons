import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-play-handball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPlayHandball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 21l3.5 -2l-4.5 -4l2 -4.5"}],["path",{"d":"M5 7l4 3l5 0.5l4 2.5l2.5 3"}],["path",{"d":"M4 20l5 -1l1.5 -2"}],["path",{"d":"M13.01 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6.01 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPlayHandball;
