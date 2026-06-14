import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-amphora",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuAmphora {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 2v5.63c0 0.42-0.270.8-0.650.98A6 6 0 0 0 6 14c0.01 4 3 7 5 8"}],["path",{"d":"M10 5H8a2 2 0 0 0 0 4h0.68"}],["path",{"d":"M14 2v5.63c0 0.420.270.80.650.98A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{"d":"M14 5h2a2 2 0 0 1 0 4h-0.68"}],["path",{"d":"M18 22H6"}],["path",{"d":"M9 2h6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuAmphora;
