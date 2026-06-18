import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-treasure-map-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTreasureMapLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.94 7.2L8.94 4.2L4 6.32V18.97L9.06 16.8L15.06 19.8L20 17.68V5.03L14.94 7.2ZM2 5L9 2L15 5L21.3 2.3C21.56 2.19 21.85 2.31 21.96 2.56C21.99 2.62 22 2.69 22 2.76V19L15 22L9 19L2.7 21.7C2.44 21.81 2.15 21.69 2.04 21.44C2.01 21.38 2 21.31 2 21.24V5ZM6 11H8V13H6V11ZM10 11H12V13H10V11ZM16 10.94L17.24 9.7L18.3 10.76L17.06 12L18.3 13.24L17.24 14.3L16 13.06L14.76 14.3L13.7 13.24L14.94 12L13.7 10.76L14.76 9.7L16 10.94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTreasureMapLine;
