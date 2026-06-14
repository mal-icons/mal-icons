import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-zodiac-aquarius",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuZodiacAquarius {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2 10 2.46-3.68a0.70.7 0 0 1 1.11-0.01l2.39 3.41a0.70.7 0 0 0 1.10l2.4-3.43a0.70.7 0 0 1 1.1 0l2.4 3.43a0.70.7 0 0 0 1.1 0l2.39-3.41a0.70.7 0 0 1 1.110.01L22 10"}],["path",{"d":"m2 18 2.46-3.68a0.70.7 0 0 1 1.11-0.01l2.39 3.41a0.70.7 0 0 0 1.1 0l2.4-3.43a0.70.7 0 0 1 1.1 0l2.4 3.43a0.70.7 0 0 0 1.1 0l2.39-3.41a0.70.7 0 0 1 1.110.01L22 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuZodiacAquarius;
