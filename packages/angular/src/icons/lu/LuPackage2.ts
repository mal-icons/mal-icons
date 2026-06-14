import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-package-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPackage2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3v6"}],["path",{"d":"M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.48a2 2 0 0 1 0.210.89V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.47a2 2 0 0 1 0.21-0.89L5.45 4.1A2 2 0 0 1 7.24 3z"}],["path",{"d":"M3.05 9.01h17.89"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPackage2;
