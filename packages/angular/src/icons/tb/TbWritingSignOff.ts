import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-writing-sign-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWritingSignOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 19c3.33 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.03 1.09 -2 3c0.03 2.05 1.66 2.88 2.5 4c1.5 2 2.5 2.5 3.5 1c0.67 -1 1.17 -1.83 1.5 -2.5c1 2.33 2.33 3.5 4 3.5h2.5"}],["path",{"d":"M16 16v1l2 2l0.5 -0.5m1.5 -2.5v-11c0 -1.12 -0.88 -2 -2 -2s-2 0.88 -2 2v7"}],["path",{"d":"M16 7h4"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWritingSignOff;
