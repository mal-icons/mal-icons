import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mail-lock-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMailLockFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12C21.16 11.37 20.13 11 19 11C16.58 11 14.56 12.72 14.1 15H13V21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V12ZM12.06 11.68L5.65 6.24L4.35 7.76L12.07 14.32L19.65 7.76L18.35 6.24L12.06 11.68ZM22 17H23V22H15V17H16V16C16 14.34 17.34 13 19 13C20.66 13 22 14.34 22 16V17ZM20 17V16C20 15.45 19.55 15 19 15C18.45 15 18 15.45 18 16V17H20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMailLockFill;
