import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-infomaniak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiInfomaniak {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.4 0A2.4 2.4 0 0 0 0 2.4v19.2C0 22.93 1.07 24 2.4 24h19.2c1.33 0 2.4-1.07 2.4-2.4V2.4C24 1.07 22.93 0 21.6 0H10.11v11.71l3.65-4.13h6l-4.58 4.35 4.87 8.13h-5.52l-2.59-5.02L10.11 16.8v3.26H5.12V0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiInfomaniak;
