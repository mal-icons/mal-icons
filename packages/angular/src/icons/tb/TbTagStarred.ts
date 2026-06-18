import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-tag-starred",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTagStarred {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 6v5.17a2 2 0 0 0 0.59 1.41l7.71 7.71a2.41 2.41 0 0 0 3.41 0l5.59 -5.59a2.41 2.41 0 0 0 0 -3.41l-7.71 -7.71a2 2 0 0 0 -1.41 -0.59h-5.17a3 3 0 0 0 -3 3"}],["path",{"d":"M12.5 13.85l-1.5 1.15l0.53 -1.86l-1.53 -1.14h1.9l0.6 -1.8l0.6 1.8h1.9l-1.53 1.14l0.53 1.86l-1.5 -1.15"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTagStarred;
