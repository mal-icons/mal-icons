import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-woman",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWoman {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 16v5"}],["path",{"d":"M14 16v5"}],["path",{"d":"M8 16h8l-2 -7h-4l-2 7"}],["path",{"d":"M5 11c1.67 -1.33 3.33 -2 5 -2"}],["path",{"d":"M19 11c-1.67 -1.33 -3.33 -2 -5 -2"}],["path",{"d":"M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWoman;
