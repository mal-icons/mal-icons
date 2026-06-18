import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-user-6-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUser6Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17C15.66 17 18.86 18.58 20.61 20.92L18.77 21.8C17.35 20.12 14.85 19 12 19C9.15 19 6.65 20.12 5.23 21.8L3.39 20.92C5.14 18.57 8.34 17 12 17ZM12 2C14.76 2 17 4.24 17 7V10C17 12.69 14.88 14.88 12.22 15L12 15C9.24 15 7 12.76 7 10V7C7 4.31 9.12 2.12 11.78 2L12 2ZM12 4C10.4 4 9.1 5.25 9 6.82L9 7V10C9 11.66 10.34 13 12 13C13.6 13 14.9 11.75 14.99 10.18L15 10V7C15 5.34 13.66 4 12 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUser6Line;
