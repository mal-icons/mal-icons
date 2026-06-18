import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-restaurant-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRestaurant2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.22 3.81L10.94 10.53L8.11 13.35L4.22 9.46C2.66 7.9 2.66 5.37 4.22 3.81ZM14.27 12.15L13.41 13L20.49 20.07L19.07 21.49L12 14.41L4.93 21.49L3.52 20.07L12.85 10.73C12.27 9.28 12.87 7.18 14.48 5.58C16.43 3.62 19.12 3.15 20.49 4.51C21.85 5.88 21.38 8.57 19.43 10.53C17.82 12.13 15.73 12.73 14.27 12.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRestaurant2Fill;
