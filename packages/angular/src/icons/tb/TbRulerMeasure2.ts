import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ruler-measure-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRulerMeasure2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 19.88c0 0.62 -0.51 1.13 -1.14 1.13h-5.71a1.13 1.13 0 0 1 -1.14 -1.12v-15.87a1 1 0 0 1 1 -1h5.86c0.63 0 1.14 0.5 1.14 1.13l0 15.75"}],["path",{"d":"M12 9h-2"}],["path",{"d":"M12 6h-3"}],["path",{"d":"M12 12h-3"}],["path",{"d":"M12 18h-3"}],["path",{"d":"M12 15h-2"}],["path",{"d":"M21 3h-4"}],["path",{"d":"M19 3v18"}],["path",{"d":"M21 21h-4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRulerMeasure2;
