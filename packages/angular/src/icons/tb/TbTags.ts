import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-tags",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTags {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 8v4.17a2 2 0 0 0 0.59 1.41l5.71 5.71a2.41 2.41 0 0 0 3.41 0l3.59 -3.59a2.41 2.41 0 0 0 0 -3.41l-5.71 -5.71a2 2 0 0 0 -1.41 -0.59h-4.17a2 2 0 0 0 -2 2"}],["path",{"d":"M18 19l1.59 -1.59a4.82 4.82 0 0 0 0 -6.82l-4.59 -4.59"}],["path",{"d":"M7 10h-0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTags;
