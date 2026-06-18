import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-heart-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHeart2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.24 4.76C22.51 7.02 22.58 10.64 20.48 12.99L12 21.49L3.52 12.99C1.42 10.64 1.5 7.02 3.76 4.76C5.52 3 8.09 2.56 10.26 3.44L6.34 7.36L7.76 8.77L12 4.53L11.99 4.52C11.99 4.52 12 4.52 12 4.53C14.35 2.42 17.98 2.49 20.24 4.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHeart2Fill;
