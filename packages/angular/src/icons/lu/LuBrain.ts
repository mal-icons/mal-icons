import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-brain",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBrain {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 18V5"}],["path",{"d":"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{"d":"M17.6 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.6 1.5"}],["path",{"d":"M18 5.13a4 4 0 0 1 2.53 5.77"}],["path",{"d":"M18 18a4 4 0 0 0 2-7.46"}],["path",{"d":"M19.97 17.48A4 4 0 1 1 12 18a4 4 0 1 1-7.97-0.52"}],["path",{"d":"M6 18a4 4 0 0 1-2-7.46"}],["path",{"d":"M6 5.13a4 4 0 0 0-2.53 5.77"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBrain;
