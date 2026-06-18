import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-anticlockwise-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAnticlockwiseFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 10H9L5 15L1 10H4V8C4 5.24 6.24 3 9 3H13V5H9C7.34 5 6 6.34 6 8V10ZM11 9H21C21.55 9 22 9.45 22 10V20C22 20.55 21.55 21 21 21H11C10.45 21 10 20.55 10 20V10C10 9.45 10.45 9 11 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAnticlockwiseFill;
