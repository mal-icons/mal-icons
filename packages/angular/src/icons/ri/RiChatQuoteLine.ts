import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-quote-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChatQuoteLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3C21.55 3 22 3.45 22 4V18C22 18.55 21.55 19 21 19H6.46L2 22.5V4C2 3.45 2.45 3 3 3H21ZM20 5H4V18.39L5.76 17H20V5ZM10.52 7.41L10.96 8.1C9.29 9 9.32 10.45 9.32 10.76C9.48 10.74 9.64 10.74 9.8 10.76C10.7 10.84 11.42 11.58 11.42 12.5C11.42 13.47 10.63 14.25 9.67 14.25C9.13 14.25 8.62 14 8.29 13.66C7.78 13.11 7.5 12.5 7.5 11.51C7.5 9.76 8.73 8.19 10.52 7.41ZM15.52 7.41L15.96 8.1C14.29 9 14.32 10.45 14.32 10.76C14.48 10.74 14.64 10.74 14.8 10.76C15.7 10.84 16.42 11.58 16.42 12.5C16.42 13.47 15.63 14.25 14.67 14.25C14.13 14.25 13.62 14 13.29 13.66C12.78 13.11 12.5 12.5 12.5 11.51C12.5 9.76 13.73 8.19 15.52 7.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChatQuoteLine;
