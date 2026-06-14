import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-dna",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuDna {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10 16 1.5 1.5"}],["path",{"d":"m14 8-1.5-1.5"}],["path",{"d":"M15 2c-1.8 2-2.52 4-2.81 5.99"}],["path",{"d":"m16.5 10.5 1 1"}],["path",{"d":"m17 6-2.89-2.89"}],["path",{"d":"M2 15c6.67-6 13.33 0 20-6"}],["path",{"d":"m20 9 0.890.89"}],["path",{"d":"M3.11 14.11 4 15"}],["path",{"d":"m6.5 12.5 1 1"}],["path",{"d":"m7 18 2.89 2.89"}],["path",{"d":"M9 22c1.8-2 2.52-3.99 2.81-5.99"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuDna;
