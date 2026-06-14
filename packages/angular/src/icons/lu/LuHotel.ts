import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-hotel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHotel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 22v-6.57"}],["path",{"d":"M12 11h0.01"}],["path",{"d":"M12 7h0.01"}],["path",{"d":"M14 15.43V22"}],["path",{"d":"M15 16a5 5 0 0 0-6 0"}],["path",{"d":"M16 11h0.01"}],["path",{"d":"M16 7h0.01"}],["path",{"d":"M8 11h0.01"}],["path",{"d":"M8 7h0.01"}],["rect",{"x":"4","y":"2","width":"16","height":"20","rx":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHotel;
