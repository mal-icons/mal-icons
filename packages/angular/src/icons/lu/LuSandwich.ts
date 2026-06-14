import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-sandwich",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSandwich {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2.37 11.22 8.37-6.78a2 2 0 0 1 2.52 0l8.37 6.78"}],["path",{"d":"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{"d":"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{"d":"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-0.4l3.15-4.2"}],["rect",{"width":"20","height":"4","x":"2","y":"11","rx":"1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSandwich;
