import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-phone-lock-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPhoneLockLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 2C18.55 2 19 2.45 19 3V10H17V4H7V20H12V22H6C5.45 22 5 21.55 5 21V3C5 2.45 5.45 2 6 2H18ZM18 12C19.66 12 21 13.34 21 15V16H22V21C22 21.55 21.55 22 21 22H15C14.45 22 14 21.55 14 21V16H15V15C15 13.34 16.34 12 18 12ZM20 18H16V20H20V18ZM18 14C17.49 14 17 14.45 17 15V16H19V15C19 14.45 18.55 14 18 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPhoneLockLine;
