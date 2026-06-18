import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-building",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBuilding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 2H6c-1.1 0-2 0.9-2 2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4c0-1.1-0.9-2-2-2zm0 18H6V4h12v16z"}],["path",{"d":"M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 0.03h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBuilding;
