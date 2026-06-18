import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-checkbox-multiple-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCheckboxMultipleFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7V3C7 2.45 7.45 2 8 2H21C21.55 2 22 2.45 22 3V16C22 16.55 21.55 17 21 17H17V20.99C17 21.55 16.55 22 15.99 22H3.01C2.45 22 2 21.55 2 20.99L2 8.01C2 7.45 2.45 7 3.01 7H7ZM9 7H15.99C16.55 7 17 7.45 17 8.01V15H20V4H9V7ZM8.5 18L14.16 12.34L12.75 10.93L8.5 15.17L6.38 13.05L4.97 14.46L8.5 18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCheckboxMultipleFill;
