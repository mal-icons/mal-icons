import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-lock-unlock-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLockUnlockFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 10H20C20.55 10 21 10.45 21 11V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V11C3 10.45 3.45 10 4 10H5V9C5 5.13 8.13 2 12 2C14.74 2 17.11 3.57 18.26 5.87L16.47 6.76C15.65 5.12 13.96 4 12 4C9.24 4 7 6.24 7 9V10ZM10 15V17H14V15H10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLockUnlockFill;
