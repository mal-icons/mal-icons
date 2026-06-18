import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-message-3-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMessage3Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 8.99C2 5.68 4.68 3 8 3H16C19.31 3 22 5.69 22 8.99V21H8C4.69 21 2 18.31 2 15.01V8.99ZM20 19V8.99C20 6.8 18.2 5 16 5H8C5.78 5 4 6.78 4 8.99V15.01C4 17.2 5.8 19 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMessage3Line;
