import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-screenshot-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiScreenshotLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.99 14.41L10.44 15.96C10.8 16.56 11 17.25 11 18C11 20.21 9.21 22 7 22C4.79 22 3 20.21 3 18C3 15.79 4.79 14 7 14C7.74 14 8.43 14.2 9.02 14.55L10.58 12.99L6.39 8.81L7.81 7.39L11.99 11.58L16.18 7.39L17.6 8.8L13.41 12.99L14.97 14.55C15.56 14.2 16.26 14 17 14C19.21 14 21 15.79 21 18C21 20.21 19.21 22 17 22C14.79 22 13 20.21 13 18C13 17.26 13.2 16.56 13.55 15.97L11.99 14.41ZM7 20C8.1 20 9 19.1 9 18C9 16.9 8.1 16 7 16C5.9 16 5 16.9 5 18C5 19.1 5.9 20 7 20ZM17 20C18.1 20 19 19.1 19 18C19 16.9 18.1 16 17 16C15.9 16 15 16.9 15 18C15 19.1 15.9 20 17 20ZM19 13V5H5V13H3V4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4V13H19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiScreenshotLine;
