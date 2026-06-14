import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-dna-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuDnaOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 2c-1.35 1.5-2.09 3-2.5 4.5L14 8"}],["path",{"d":"m17 6-2.89-2.89"}],["path",{"d":"M2 15c3.33-3 6.67-3 10-3"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"m20 9 0.890.89"}],["path",{"d":"M22 9c-1.5 1.35-3 2.09-4.5 2.5l-1-1"}],["path",{"d":"M3.11 14.11 4 15"}],["path",{"d":"m6.5 12.5 1 1"}],["path",{"d":"m7 18 2.89 2.89"}],["path",{"d":"M9 22c1.35-1.5 2.09-3 2.5-4.5L10 16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuDnaOff;
