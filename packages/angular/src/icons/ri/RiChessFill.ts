import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chess-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChessFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 16H17.81C17.41 14.19 16.34 12.85 14.15 11.91C13.93 11.82 13.81 11.57 13.89 11.34C13.95 11.14 14.15 11.02 14.36 11.04L18.85 11.55C19.24 11.6 19.63 11.4 19.83 11.05L20.65 9.61C20.86 9.24 20.82 8.79 20.55 8.47L15.5 2.5V0.29C9.34 2.84 5 8.91 5 16ZM4 17H19V20H20V22H3V20H4V17ZM15 7C15 7.55 14.55 8 14 8C13.45 8 13 7.55 13 7C13 6.45 13.45 6 14 6C14.55 6 15 6.45 15 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChessFill;
