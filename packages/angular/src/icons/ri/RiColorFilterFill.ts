import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-color-filter-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiColorFilterFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.57 8.03C16.85 7.41 17 6.72 17 6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6C7 8.58 8.96 10.71 11.47 10.97C12.69 9.24 14.58 8.21 16.57 8.03ZM13.15 17.95C14 16.13 14.05 13.97 13.15 12.06C14.64 10.01 17.46 9.38 19.7 10.67L19.7 10.67C22.09 12.05 22.91 15.11 21.53 17.5C20.15 19.89 17.09 20.71 14.7 19.33C14.07 18.97 13.55 18.49 13.15 17.95ZM6.27 10.03C7.43 11.67 9.27 12.79 11.37 12.97C12.4 15.28 11.54 18.04 9.3 19.33C6.91 20.71 3.85 19.89 2.47 17.5C1.09 15.11 1.91 12.05 4.3 10.67C4.93 10.31 5.6 10.1 6.27 10.03Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiColorFilterFill;
