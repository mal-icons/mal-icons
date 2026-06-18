import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-database-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDatabase2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 9.5V12.5C21 14.99 16.97 17 12 17C7.03 17 3 14.99 3 12.5V9.5C3 11.99 7.03 14 12 14C16.97 14 21 11.99 21 9.5ZM3 14.5C3 16.99 7.03 19 12 19C16.97 19 21 16.99 21 14.5V17.5C21 19.99 16.97 22 12 22C7.03 22 3 19.99 3 17.5V14.5ZM12 12C7.03 12 3 9.99 3 7.5C3 5.01 7.03 3 12 3C16.97 3 21 5.01 21 7.5C21 9.99 16.97 12 12 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDatabase2Fill;
