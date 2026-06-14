import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-blender",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBlender {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 14a2 2 0 0 0-1.96 1.62l-1.02 5.19A1 1 0 0 0 6 22h12a1 1 0 0 0 0.98-1.19l-1.02-5.19A2 2 0 0 0 16 14z"}],["path",{"d":"m17 2-1 12"}],["path",{"d":"M8.01 14 7 2"}],["path",{"d":"M7.57 8.79A5 5 0 0 0 12 8a5 5 0 0 1 4.56-0.75"}],["path",{"d":"M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 0.69 1.5"}],["path",{"d":"M12 18h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBlender;
