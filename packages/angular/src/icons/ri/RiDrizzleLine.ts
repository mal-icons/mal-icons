import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-drizzle-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDrizzleLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 18V16H17.5C19.43 16 21 14.43 21 12.5C21 10.57 19.43 9 17.5 9C16.52 9 15.64 9.4 15 10.05C15 10.03 15 10.02 15 10C15 6.69 12.31 4 9 4C5.69 4 3 6.69 3 10C3 12.61 4.67 14.83 7 15.66V17.75C3.55 16.86 1 13.73 1 10C1 5.58 4.58 2 9 2C12.39 2 15.3 4.11 16.46 7.1C16.8 7.03 17.14 7 17.5 7C20.54 7 23 9.46 23 12.5C23 15.54 20.54 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDrizzleLine;
