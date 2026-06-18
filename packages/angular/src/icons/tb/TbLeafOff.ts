import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-leaf-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLeafOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 21c0.48 -4.27 2.3 -7.64 6.33 -9.68"}],["path",{"d":"M6.62 6.62c-1.87 1.63 -2.62 3.88 -2.63 6.38c0 1 0 3 2 5h3.01c2.73 0 5.09 -0.63 6.92 -2.09m1.9 -2.1c1.22 -1.87 1.99 -4.43 2.18 -7.81v-2h-4.01c-2.86 0 -5.12 0.41 -6.86 1.12"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLeafOff;
