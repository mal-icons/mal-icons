import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-zoom-replace",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbZoomReplace {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 21l-6 -6"}],["path",{"d":"M3.29 8a7 7 0 0 1 5.08 -4.81a7.02 7.02 0 0 1 8.24 4.4"}],["path",{"d":"M17 4v4h-4"}],["path",{"d":"M16.7 12a7 7 0 0 1 -5.07 4.8a7.02 7.02 0 0 1 -8.24 -4.4"}],["path",{"d":"M3 16v-4h4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbZoomReplace;
