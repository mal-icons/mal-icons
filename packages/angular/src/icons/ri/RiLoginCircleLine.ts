import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-login-circle-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLoginCircleLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 11V8L15 12L10 16V13H1V11H10ZM2.46 15H4.58C5.77 17.93 8.64 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C8.64 4 5.77 6.07 4.58 9H2.46C3.73 4.94 7.52 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C7.52 22 3.73 19.06 2.46 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLoginCircleLine;
