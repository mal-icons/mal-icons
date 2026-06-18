import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-fountain-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFountainOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 16v-5a2 2 0 1 0 -4 0"}],["path",{"d":"M15 16v-1m0 -4a2 2 0 1 1 4 0"}],["path",{"d":"M12 16v-4m0 -4v-2a3 3 0 0 1 6 0"}],["path",{"d":"M7.45 3.43a3 3 0 0 1 4.55 2.57"}],["path",{"d":"M20 16h1v1m-0.87 3.11a2.99 2.99 0 0 1 -2.13 0.89h-12a3 3 0 0 1 -3 -3v-2h13"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFountainOff;
