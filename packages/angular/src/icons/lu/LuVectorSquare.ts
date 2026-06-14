import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-vector-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuVectorSquare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 7a24 24 0 0 1 0 10"}],["path",{"d":"M4.5 7a24 24 0 0 0 0 10"}],["path",{"d":"M7 19.5a24 24 0 0 0 10 0"}],["path",{"d":"M7 4.5a24 24 0 0 1 10 0"}],["rect",{"x":"17","y":"17","width":"5","height":"5","rx":"1"}],["rect",{"x":"17","y":"2","width":"5","height":"5","rx":"1"}],["rect",{"x":"2","y":"17","width":"5","height":"5","rx":"1"}],["rect",{"x":"2","y":"2","width":"5","height":"5","rx":"1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuVectorSquare;
