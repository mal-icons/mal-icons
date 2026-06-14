import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-broccoli",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBroccoli {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 13a3 3 0 0 1-2.12-5.12"}],["path",{"d":"M15.61 14.2c-3.5 1.5-5.9 4.5-8.9 7.5A1 1 0 0 1 6 22c-2 0-4-2-4-4a1 1 0 0 1 0.29-0.71c1.91-1.91 3.82-3.58 5.35-5.44"}],["path",{"d":"M16.57 14.74A4 4 0 0 1 14 11"}],["path",{"d":"M7.14 10.91a4 4 0 1 1 2.76-7.43A4 4 0 0 1 16.7 4.48a2 2 0 0 1 2.82 2.82 4 4 0 0 1 1 6.81A4 4 0 1 1 13 16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBroccoli;
