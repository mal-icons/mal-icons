import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-commodore",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCommodore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.20.8C5.020.8 0 5.81 0 12s5.02 11.2 11.2 11.2c1.09 0 2.15-0.16 3.15-0.45v-5.33a6.27 6.27 0 1 1 0-10.84v-5.33c-1-0.29-2.06-0.45-3.15-0.45Zm3.38 6.34v4.3h5.27L24 7.14Zm-0.04 5.38v4.3h9.42l-4.16-4.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCommodore;
