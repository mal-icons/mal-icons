import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-facebook-box-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFacebookBoxFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.4 21V14.03H17.73L18.08 11.33H15.4V9.6C15.4 8.81 15.62 8.28 16.74 8.28L18.18 8.28V5.86C17.93 5.82 17.08 5.75 16.09 5.75C14.02 5.75 12.61 7.01 12.61 9.33V11.33H10.27V14.03H12.61V21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4V20C21 20.55 20.55 21 20 21H15.4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFacebookBoxFill;
