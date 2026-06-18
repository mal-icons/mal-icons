import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-logout-circle-r-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLogoutCircleRLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C15.27 2 18.18 3.57 20 6L17.29 6C15.88 4.75 14.03 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C14.03 20 15.88 19.24 17.29 18L20 18C18.18 20.43 15.27 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLogoutCircleRLine;
