import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-linksys",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLinksys {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.87 0c-1.7 0-3.08 1.38-3.08 3.08 0 1.7 1.38 3.08 3.08 3.08 1.7 0 3.08-1.38 3.08-3.08 0-1.7-1.38-3.08-3.08-3.08ZM1.050.49V24h21.31v-3.47H5.17V0.49Zm7.16 0v17.16h14.15v-3.47h-10.04V0.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLinksys;
