import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-library-big",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuLibraryBig {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"width":"8","height":"18","x":"3","y":"3","rx":"1"}],["path",{"d":"M7 3v18"}],["path",{"d":"M20.4 18.9c0.20.5-0.1 1.1-0.6 1.3l-1.90.7c-0.50.2-1.1-0.1-1.3-0.6L11.1 5.1c-0.2-0.50.1-1.10.6-1.3l1.9-0.7c0.5-0.2 1.10.1 1.30.6Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuLibraryBig;
