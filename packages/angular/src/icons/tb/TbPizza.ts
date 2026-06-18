import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-pizza",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPizza {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 21.5c-3.04 0 -5.95 -0.71 -8.5 -1.98l8.5 -16.52l8.5 16.52a19.09 19.09 0 0 1 -8.5 1.98"}],["path",{"d":"M5.38 15.87a14.94 14.94 0 0 0 6.82 1.63a14.94 14.94 0 0 0 6.5 -1.48"}],["path",{"d":"M13 11.01v-0.01"}],["path",{"d":"M11 14v-0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPizza;
