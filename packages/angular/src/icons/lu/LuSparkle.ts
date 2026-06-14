import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-sparkle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSparkle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.02 2.81a1 1 0 0 1 1.97 0l1.05 5.56a2 2 0 0 0 1.59 1.59l5.56 1.05a1 1 0 0 1 0 1.97l-5.56 1.05a2 2 0 0 0-1.59 1.59l-1.05 5.56a1 1 0 0 1-1.97 0l-1.05-5.56a2 2 0 0 0-1.59-1.59l-5.56-1.05a1 1 0 0 1 0-1.97l5.56-1.05a2 2 0 0 0 1.59-1.59z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSparkle;
