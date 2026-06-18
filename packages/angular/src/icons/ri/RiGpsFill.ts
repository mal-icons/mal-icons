import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-gps-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGpsFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 16L15 22H9L12 16ZM9.37 16.25C7.95 15.37 7 13.8 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 13.8 16.05 15.37 14.63 16.25L13.27 13.54C13.72 13.18 14 12.62 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 12.62 10.28 13.18 10.73 13.54L9.37 16.25ZM7.13 20.74C4.07 19.03 2 15.76 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 15.76 19.93 19.03 16.87 20.74L15.52 18.05C17.6 16.84 19 14.58 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12C5 14.58 6.4 16.84 8.48 18.05L7.13 20.74Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGpsFill;
