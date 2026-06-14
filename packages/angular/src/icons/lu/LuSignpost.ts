import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-signpost",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSignpost {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13v8"}],["path",{"d":"M12 3v3"}],["path",{"d":"M2.35 10.35a1.21 1.21 0 0 1 0-1.71l2.06-2.06A2 2 0 0 1 5.83 6h12.34a2 2 0 0 1 1.410.59l2.06 2.06a1.21 1.21 0 0 1 0 1.71l-2.06 2.06a2 2 0 0 1-1.410.59H5.83a2 2 0 0 1-1.41-0.59z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSignpost;
