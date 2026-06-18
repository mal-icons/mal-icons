import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-seedling-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSeedlingOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.41 7.41a6.03 6.03 0 0 0 -2.82 -2.82m-4.59 -0.59h-1v2a6 6 0 0 0 6 6h3"}],["path",{"d":"M12 14a6 6 0 0 1 0.26 -1.74m1.51 -2.51a5.98 5.98 0 0 1 4.24 -1.75h3v1c0 2.16 -1.14 4.05 -2.85 5.11m-3.15 0.89h-3"}],["path",{"d":"M12 20v-8"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSeedlingOff;
