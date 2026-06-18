import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-private-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChatPrivateLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C10.3 22 8.7 21.57 7.29 20.82L2 22L3.18 16.71C2.43 15.31 2 13.7 2 12C2 6.48 6.48 2 12 2ZM12 4C7.58 4 4 7.58 4 12C4 13.33 4.33 14.62 4.94 15.77L5.29 16.42L4.63 19.37L7.58 18.71L8.24 19.06C9.38 19.67 10.67 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 7C13.66 7 15 8.34 15 10V11H16V16H8V11H9V10C9 8.34 10.34 7 12 7ZM14 13H10V14H14V13ZM12 9C11.45 9 11 9.45 11 10V11H13V10C13 9.45 12.55 9 12 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChatPrivateLine;
