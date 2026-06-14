import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-image-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuImageOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["line",{"x1":"2","x2":"22","y1":"2","y2":"22"}],["path",{"d":"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{"x1":"13.5","x2":"6","y1":"13.5","y2":"21"}],["line",{"x1":"18","x2":"21","y1":"12","y2":"15"}],["path",{"d":"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c0.55 0 1.05-0.22 1.41-0.59"}],["path",{"d":"M21 15V5a2 2 0 0 0-2-2H9"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuImageOff;
