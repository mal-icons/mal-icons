import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-camera-3-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCamera3Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 6C2 5.45 2.46 5 2.99 5H21.01C21.56 5 22 5.44 22 6V20C22 20.55 21.54 21 21.01 21H2.99C2.44 21 2 20.56 2 20V6ZM14 18C16.76 18 19 15.76 19 13C19 10.24 16.76 8 14 8C11.24 8 9 10.24 9 13C9 15.76 11.24 18 14 18ZM4 7V9H7V7H4ZM4 2H10V4H4V2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCamera3Fill;
