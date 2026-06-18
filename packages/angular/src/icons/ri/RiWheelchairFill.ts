import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-wheelchair-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWheelchairFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 10.34L8 12.54C6.8 13.23 6 14.52 6 16C6 18.21 7.79 20 10 20C11.48 20 12.77 19.2 13.46 18L15.66 18C14.83 20.33 12.61 22 10 22C6.68 22 4 19.31 4 16C4 13.39 5.67 11.16 8 10.34ZM12 17C10.34 17 9 15.66 9 14V10C9 8.34 10.34 7 12 7C13.65 7 15 8.34 15 10V15H16.43C17.08 15 17.68 15.31 18.06 15.84L18.15 15.97L20.86 20.49L19.14 21.51L16.43 17H12ZM12 2C13.38 2 14.5 3.12 14.5 4.5C14.5 5.88 13.38 7 12 7C10.62 7 9.5 5.88 9.5 4.5C9.5 3.12 10.62 2 12 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWheelchairFill;
