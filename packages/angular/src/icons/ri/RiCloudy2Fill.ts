import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-cloudy-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCloudy2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 21H7C3.69 21 1 18.31 1 15C1 12.38 2.67 10.16 5.01 9.34C5 9.23 5 9.11 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 9.11 19 9.23 18.99 9.34C21.33 10.16 23 12.38 23 15C23 18.31 20.31 21 17 21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCloudy2Fill;
