import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-clockwise-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiClockwiseFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 10H23L19 15L15 10H18V8C18 6.34 16.66 5 15 5H11V3H15C17.76 3 20 5.24 20 8V10ZM13 9C13.55 9 14 9.45 14 10V20C14 20.55 13.55 21 13 21H3C2.45 21 2 20.55 2 20V10C2 9.45 2.45 9 3 9H13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiClockwiseFill;
