import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sun-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSunLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51 4.93L4.93 3.51L7.05 5.64L5.64 7.05L3.51 4.93ZM16.95 18.36L18.36 16.95L20.49 19.07L19.07 20.49L16.95 18.36ZM19.07 3.51L20.49 4.93L18.36 7.05L16.95 5.64L19.07 3.51ZM5.64 16.95L7.05 18.36L4.93 20.49L3.51 19.07L5.64 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSunLine;
