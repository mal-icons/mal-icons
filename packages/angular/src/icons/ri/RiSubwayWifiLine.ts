import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-subway-wifi-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSubwayWifiLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 18C21 19.1 20.1 20 19 20H17.2L19 21.5V22H5V21.5L6.8 20H5C3.9 20 3 19.1 3 18V7C3 4.79 4.79 3 7 3H13V11H21V18ZM19 13H5V18H19V13ZM7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14ZM16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14ZM11 5H7C5.95 5 5.08 5.82 5.01 6.85L5 7V11H11V5ZM18.5 1C20.99 1 23 3.01 23 5.5C23 7.99 20.99 10 18.5 10C16.01 10 14 7.99 14 5.5C14 3.01 16.01 1 18.5 1ZM18.5 6.17C18.01 6.17 17.56 6.34 17.21 6.64L17.09 6.75L18.5 8.17L19.91 6.75C19.55 6.39 19.05 6.17 18.5 6.17ZM18.5 3.5C17.3 3.5 16.2 3.96 15.37 4.7L15.2 4.87L16.14 5.81C16.75 5.21 17.58 4.83 18.5 4.83C19.34 4.83 20.11 5.15 20.7 5.66L20.86 5.81L21.8 4.87C20.96 4.02 19.79 3.5 18.5 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSubwayWifiLine;
