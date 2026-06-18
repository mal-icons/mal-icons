import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-ticket-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTicketLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3C21.56 3 22 3.45 22 4V9.5C20.62 9.5 19.5 10.62 19.5 12C19.5 13.38 20.62 14.5 22 14.5V20C22 20.55 21.56 21 21 21H3C2.45 21 2 20.55 2 20V14.5C3.39 14.5 4.5 13.38 4.5 12C4.5 10.62 3.39 9.5 2 9.5V4C2 3.45 2.45 3 3 3H21ZM20 5H4V7.97L4.16 8.05C5.5 8.78 6.43 10.17 6.5 11.79L6.5 12C6.5 13.7 5.56 15.19 4.16 15.95L4 16.03V19H20V16.03L19.85 15.95C18.51 15.22 17.58 13.83 17.51 12.21L17.5 12C17.5 10.3 18.45 8.81 19.85 8.05L20 7.97V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTicketLine;
