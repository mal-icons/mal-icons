import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-circle-fading-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCircleFadingArrowUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{"d":"m16 12-4-4-4 4"}],["path",{"d":"M12 16V8"}],["path",{"d":"M2.5 8.88a10 10 0 0 0-0.5 3"}],["path",{"d":"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{"d":"M4.64 5.24a10 10 0 0 1 0.89-0.86"}],["path",{"d":"M8.64 21.42a10 10 0 0 0 7.63-0.38"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCircleFadingArrowUp;
