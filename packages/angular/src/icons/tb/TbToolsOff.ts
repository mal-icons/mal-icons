import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-tools-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbToolsOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 12l4 -4a2.83 2.83 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7"}],["path",{"d":"M14.5 5.5l4 4"}],["path",{"d":"M12 8l-5 -5m-2 2l-2 2l5 5"}],["path",{"d":"M7 8l-1.5 1.5"}],["path",{"d":"M16 12l5 5m-2 2l-2 2l-5 -5"}],["path",{"d":"M16 17l-1.5 1.5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbToolsOff;
