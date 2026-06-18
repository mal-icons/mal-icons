import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-swipe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSwipe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 16.57v2.42a2.01 2.01 0 0 1 -2.01 2.01h-7.98a2.01 2.01 0 0 1 -2.01 -2.01v-7.98a2.01 2.01 0 0 1 2.01 -2.01h2.95"}],["path",{"d":"M9.17 4.51a2.04 2.04 0 0 1 2.5 -1.44l7.83 2.1a2.04 2.04 0 0 1 1.44 2.5l-2.1 7.83a2.04 2.04 0 0 1 -2.5 1.44l-7.83 -2.1a2.04 2.04 0 0 1 -1.44 -2.5l2.1 -7.83l0 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSwipe;
