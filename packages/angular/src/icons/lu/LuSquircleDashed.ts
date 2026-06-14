import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-squircle-dashed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSquircleDashed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.77 3.04a34 34 0 0 0-3.54 0"}],["path",{"d":"M13.77 20.96a33 33 0 0 1-3.540"}],["path",{"d":"M20.18 17.74c-0.51 1.15-1.29 1.93-2.44 2.44"}],["path",{"d":"M20.18 6.26c-0.51-1.15-1.29-1.93-2.44-2.44"}],["path",{"d":"M20.96 10.23a33 33 0 0 1 0 3.54"}],["path",{"d":"M3.04 10.23a34 34 0 0 0 0 3.54"}],["path",{"d":"M6.26 20.18c-1.15-0.51-1.93-1.29-2.44-2.44"}],["path",{"d":"M6.26 3.82c-1.150.51-1.93 1.29-2.44 2.44"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSquircleDashed;
