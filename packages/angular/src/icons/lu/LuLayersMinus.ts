import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-layers-minus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuLayersMinus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 0.830.18 2 2 0 0 0 0.83-0.18l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{"d":"M16 17h6"}],["path",{"d":"M2 12a1 1 0 0 0 0.60.92l8.58 3.91a2 2 0 0 0 0.830.18"}],["path",{"d":"M2 17a1 1 0 0 0 0.60.92l8.58 3.91a2 2 0 0 0 0.830.18 2 2 0 0 0 0.83-0.18l2.11-0.96"}],["path",{"d":"M22.02 12a1 1 0 0 1-0.60.92l-0.180.08"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuLayersMinus;
