import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-image-upscale",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuImageUpscale {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 3h5v5"}],["path",{"d":"M17 21h2a2 2 0 0 0 2-2"}],["path",{"d":"M21 12v3"}],["path",{"d":"m21 3-5 5"}],["path",{"d":"M3 7V5a2 2 0 0 1 2-2"}],["path",{"d":"m5 21 4.14-4.14a1.21 1.21 0 0 1 1.71 0L13 19"}],["path",{"d":"M9 3h3"}],["rect",{"x":"3","y":"11","width":"10","height":"10","rx":"1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuImageUpscale;
