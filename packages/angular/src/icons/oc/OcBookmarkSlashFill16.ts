import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-bookmark-slash-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBookmarkSlashFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.19 1.14a0.750.75 0 1 0-0.88 1.22L3 4.31v9.95a0.750.75 0 0 0 1.210.6L8 11.94l3.79 2.9A0.750.75 0 0 0 13 14.25v-2.7l1.81 1.31a0.750.75 0 1 0 0.88-1.21l-2.99-2.17a1.09 1.09 0 0 0-0.01-0.01L4.2 3.32a0.710.71 0 0 0-0.01-0.01L1.19 1.14Zm2.930.2A0.50.5 0 0 1 4.6 1h7.23C12.48 1 13 1.52 13 2.17v5.05a0.50.5 0 0 1-0.790.41l-7.9-5.72a0.50.5 0 0 1-0.18-0.56Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBookmarkSlashFill16;
