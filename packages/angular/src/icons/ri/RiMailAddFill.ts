import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mail-add-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMailAddFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 13.34C21.37 13.12 20.7 13 20 13C16.69 13 14 15.69 14 19C14 19.7 14.12 20.37 14.34 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V13.34ZM12.06 11.68L5.65 6.24L4.35 7.76L12.07 14.32L19.65 7.76L18.35 6.24L12.06 11.68ZM21 18H24V20H21V23H19V20H16V18H19V15H21V18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMailAddFill;
