import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-cuboid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCuboid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 22v-8"}],["path",{"d":"M2.34 8.89 10 14l11.72-7.03"}],["path",{"d":"M22 14a2 2 0 0 1-0.97 1.72l-10 6a2 2 0 0 1-2.14-0.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 0.97-1.71l10-6a2 2 0 0 1 2.140.05l6 4A2 2 0 0 1 22 8z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCuboid;
