import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-memory-stick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMemoryStick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12v-2"}],["path",{"d":"M12 18v-2"}],["path",{"d":"M16 12v-2"}],["path",{"d":"M16 18v-2"}],["path",{"d":"M2 11h1.5"}],["path",{"d":"M20 18v-2"}],["path",{"d":"M20.5 11H22"}],["path",{"d":"M4 18v-2"}],["path",{"d":"M8 12v-2"}],["path",{"d":"M8 18v-2"}],["rect",{"x":"2","y":"6","width":"20","height":"10","rx":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMemoryStick;
