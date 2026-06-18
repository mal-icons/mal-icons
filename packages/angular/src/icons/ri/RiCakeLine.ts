import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-cake-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCakeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 7V11L20 11C20.55 11 21 11.45 21 12V20L23 20V22H1V20L3 20V12C3 11.45 3.45 11 4 11L11 11V7H13ZM19 13H5V20H19V13ZM13.83 0.4C14.66 1.84 14.17 3.67 12.73 4.5L11 5.5C10.17 4.07 10.66 2.23 12.1 1.4L13.83 0.4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCakeLine;
