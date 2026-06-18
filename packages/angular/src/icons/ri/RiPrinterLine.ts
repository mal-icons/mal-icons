import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-printer-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPrinterLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 2C17.55 2 18 2.45 18 3V7H21C21.55 7 22 7.45 22 8V18C22 18.55 21.55 19 21 19H18V21C18 21.55 17.55 22 17 22H7C6.45 22 6 21.55 6 21V19H3C2.45 19 2 18.55 2 18V8C2 7.45 2.45 7 3 7H6V3C6 2.45 6.45 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.45 6.45 15 7 15H17C17.55 15 18 15.45 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPrinterLine;
