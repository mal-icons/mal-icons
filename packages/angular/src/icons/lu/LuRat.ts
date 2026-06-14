import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-rat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuRat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{"d":"M13.24 18a3 3 0 0 0-2.2-5"}],["path",{"d":"M16 9h0.01"}],["path",{"d":"M16.82 3.94a3 3 0 1 1 3.24 4.87l1.82 2.59a1.5 1.5 0 0 1-1.5 2.1l-2.87-0.45a3 3 0 0 0-3.5 3"}],["path",{"d":"M17 4.99a3 3 0 1 0-5.2 2.05A7 7 0 0 0 4 14.02 4 4 0 0 0 8 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuRat;
