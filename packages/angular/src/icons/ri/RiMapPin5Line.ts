import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-map-pin-5-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMapPin5Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 18.49L16.24 14.24C18.59 11.9 18.59 8.1 16.24 5.76C13.9 3.41 10.1 3.41 7.76 5.76C5.41 8.1 5.41 11.9 7.76 14.24L12 18.49ZM17.66 15.66L12 21.31L6.34 15.66C3.22 12.53 3.22 7.47 6.34 4.34C9.47 1.22 14.53 1.22 17.66 4.34C20.78 7.47 20.78 12.53 17.66 15.66ZM5 22H19V24H5V22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMapPin5Line;
