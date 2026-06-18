import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-printer-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPrinterFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 17H17V22H7V17ZM19 20V15H5V20H3C2.45 20 2 19.55 2 19V9C2 8.45 2.45 8 3 8H21C21.55 8 22 8.45 22 9V19C22 19.55 21.55 20 21 20H19ZM5 10V12H8V10H5ZM7 2H17C17.55 2 18 2.45 18 3V6H6V3C6 2.45 6.45 2 7 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPrinterFill;
