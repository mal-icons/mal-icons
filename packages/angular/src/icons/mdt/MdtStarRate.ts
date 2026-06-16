import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-star-rate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtStarRate {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.94 12 12 8.89 11.06 12H8.24l2.27 1.62-0.93 3.01L12 14.79l2.42 1.84-0.93-3.01L15.76 12z","opacity":".3"}],["path",{"d":"M22 10h-7.58L12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.17 22l-2.35-7.59L22 10zm-7.58 6.63L12 14.79l-2.42 1.840.93-3.01L8.24 12h2.82L12 8.89l0.94 3.11h2.82l-2.27 1.620.93 3.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtStarRate;
