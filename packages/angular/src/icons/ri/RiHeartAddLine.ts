import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-heart-add-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHeartAddLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 14V17H22V19H19L19 22H17L17 19H14V17H17V14H19ZM20.24 4.76C22.51 7.02 22.58 10.64 20.48 12.99L19.06 11.57C20.39 10.05 20.32 7.66 18.83 6.17C17.32 4.67 14.91 4.61 13.34 6.02L12 7.22L10.67 6.02C9.09 4.61 6.68 4.67 5.17 6.17C3.68 7.66 3.61 10.05 4.98 11.62L13.41 20.07L12 21.49L3.52 12.99C1.42 10.64 1.5 7.02 3.76 4.76C6.02 2.49 9.65 2.42 12 4.53C14.35 2.42 17.98 2.49 20.24 4.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHeartAddLine;
