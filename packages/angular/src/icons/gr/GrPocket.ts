import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-pocket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrPocket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd"}],["path",{"fill":"currentColor","d":"M12,2 L2,2 C0.9,2 0,2.9 0,4 C0,7 0,9 0,12 C0,17.98 6,23 12,23 C18,23 24,17.98 24,12 C24,9 24,7 24,4 C24,2.9 23.1,2 22,2 L12,2 Z"}],["polyline",{"stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3","points":"6 9 12.4 15 18 9"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrPocket;
