import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-arrow-big-up-dash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuArrowBigUpDash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.29a0.710.71 0 0 0 0.5-1.21l-6.94-6.94a1.21 1.21 0 0 0-1.71 0l-6.94 6.94a0.710.71 0 0 0 0.5 1.21H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z"}],["path",{"d":"M9 20h6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuArrowBigUpDash;
