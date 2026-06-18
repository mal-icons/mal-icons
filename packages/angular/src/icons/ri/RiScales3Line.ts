import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-scales-3-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiScales3Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 2L13 3.28L18 4.95L21.63 3.74L22.26 5.63L19.23 6.64L22.33 15.15C21.24 16.29 19.7 17 18 17C16.3 17 14.76 16.29 13.67 15.15L16.76 6.64L13 5.39V19H17V21H7V19H11V5.39L7.23 6.64L10.33 15.15C9.24 16.29 7.7 17 6 17C4.3 17 2.76 16.29 1.67 15.15L4.76 6.64L1.73 5.63L2.37 3.74L6 4.95L11 3.28L11 2H13ZM18 9.1L16.04 14.49C16.63 14.82 17.3 15 18 15C18.7 15 19.37 14.82 19.96 14.49L18 9.1ZM6 9.1L4.04 14.49C4.63 14.82 5.3 15 6 15C6.7 15 7.37 14.82 7.96 14.49L6 9.1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiScales3Line;
