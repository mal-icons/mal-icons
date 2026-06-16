import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-hotel-class",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfHotelClass {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.58 10H1l6.17 4.41L4.83 22 11 17.31 17.18 22l-2.35-7.59L21 10h-7.58L11 2l-2.42 8zm12.78 12-1.86-6.01L23.68 13h-3.44l-3.08 2.2 1.46 4.72L21.36 22zM17 8l-1.82-6-1.04 3.450.77 2.55H17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfHotelClass;
