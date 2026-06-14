import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-timeline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTimeline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 12h0.01"}],["path",{"d":"M4 16h0.01"}],["path",{"d":"M4 20h0.01"}],["path",{"d":"M4 4h0.01"}],["path",{"d":"M4 8h0.01"}],["path",{"d":"M9.41 13.41a2 2 0 0 0 1.410.59H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.17a2 2 0 0 0-1.410.59L8 12z"}],["path",{"d":"M9.41 21.41a2 2 0 0 0 1.410.59H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.17a2 2 0 0 0-1.410.59L8 20z"}],["path",{"d":"M9.41 5.41A2 2 0 0 0 10.83 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.17a2 2 0 0 0-1.410.59L8 4z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTimeline;
