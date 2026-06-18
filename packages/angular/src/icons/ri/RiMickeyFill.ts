import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mickey-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMickeyFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 2C20.99 2 23 4.01 23 6.5C23 8.68 21.45 10.5 19.38 10.91C19.78 11.86 20 12.91 20 14C20 18.42 16.42 22 12 22C7.58 22 4 18.42 4 14C4 12.91 4.22 11.86 4.62 10.91C2.55 10.5 1 8.68 1 6.5C1 4.01 3.01 2 5.5 2C7.9 2 9.87 3.88 9.99 6.25C10.63 6.09 11.31 6 12 6C12.69 6 13.37 6.09 14.01 6.25C14.13 3.88 16.1 2 18.5 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMickeyFill;
