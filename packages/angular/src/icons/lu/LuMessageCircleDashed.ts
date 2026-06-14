import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-message-circle-dashed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMessageCircleDashed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.1 2.18a10 10 0 0 1 3.8 0"}],["path",{"d":"M13.9 21.82a10 10 0 0 1-3.8 0"}],["path",{"d":"M17.61 3.72a10 10 0 0 1 2.69 2.7"}],["path",{"d":"M2.18 13.9a10 10 0 0 1 0-3.8"}],["path",{"d":"M20.28 17.61a10 10 0 0 1-2.7 2.69"}],["path",{"d":"M21.82 10.1a10 10 0 0 1 0 3.8"}],["path",{"d":"M3.72 6.39a10 10 0 0 1 2.7-2.69"}],["path",{"d":"m6.16 21.12-2.910.85a1 1 0 0 1-1.24-1.17l0.97-2.98"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMessageCircleDashed;
