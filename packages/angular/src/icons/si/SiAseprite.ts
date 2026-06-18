import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-aseprite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAseprite {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.01 0v1.6h15.99V0zm15.99 1.6v1.6h1.6V1.6zm1.6 1.6v14.4h-1.6v1.6H4.01v-1.6h-1.6V3.2H0.81v17.6h1.6v1.6h1.6V24h15.99v-1.6h1.6v-1.6h1.6V3.2zm-19.19 0h1.6V1.6h-1.6zm4.8 3.2v6.4h1.6V6.4zm8 0v6.4h1.6V6.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAseprite;
