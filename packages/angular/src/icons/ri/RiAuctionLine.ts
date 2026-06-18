import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-auction-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAuctionLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 20V22H2V20H14ZM14.59 0.69L22.37 8.47L20.95 9.88L19.89 9.53L17.42 12L23.08 17.66L21.66 19.07L16 13.42L13.6 15.82L13.88 16.95L12.47 18.37L4.69 10.59L6.11 9.17L7.24 9.46L13.53 3.16L13.18 2.1L14.59 0.69ZM15.3 4.22L8.23 11.3L11.76 14.83L18.83 7.76L15.3 4.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAuctionLine;
