import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ruler-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRuler3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.88 8c0.62 0 1.13 0.51 1.13 1.14v5.71c0 0.63 -0.5 1.14 -1.12 1.14h-15.87a1 1 0 0 1 -1 -1v-5.86c0 -0.63 0.5 -1.14 1.13 -1.14h15.75"}],["path",{"d":"M9 8v2"}],["path",{"d":"M6 8v3"}],["path",{"d":"M12 8v3"}],["path",{"d":"M18 8v3"}],["path",{"d":"M15 8v2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRuler3;
