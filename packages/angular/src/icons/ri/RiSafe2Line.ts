import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-safe-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSafe2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 20.33V22H18V20.67L10.59 21.9C10.31 21.95 10.06 21.76 10.01 21.49C10.01 21.46 10 21.44 10 21.41V20H6V22H4V20H3C2.45 20 2 19.55 2 19V4C2 3.45 2.45 3 3 3H10V1.59C10 1.31 10.23 1.09 10.5 1.09C10.53 1.09 10.56 1.09 10.59 1.1L21.17 2.86C21.65 2.94 22 3.36 22 3.85V6H23V8H22V15H23V17H22V19.15C22 19.64 21.65 20.06 21.17 20.14L20 20.33ZM4 5V18H10V5H4ZM12 19.64L20 18.31V4.69L12 3.36V19.64ZM16.5 14C15.68 14 15 12.88 15 11.5C15 10.12 15.68 9 16.5 9C17.33 9 18 10.12 18 11.5C18 12.88 17.33 14 16.5 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSafe2Line;
