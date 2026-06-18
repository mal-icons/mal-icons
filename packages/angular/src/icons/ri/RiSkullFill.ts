import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-skull-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSkullFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 18V21C18 21.55 17.55 22 17 22H7C6.45 22 6 21.55 6 21V18H3C2.45 18 2 17.55 2 17V12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12V17C22 17.55 21.55 18 21 18H18ZM7.5 14C8.33 14 9 13.33 9 12.5C9 11.67 8.33 11 7.5 11C6.67 11 6 11.67 6 12.5C6 13.33 6.67 14 7.5 14ZM16.5 14C17.33 14 18 13.33 18 12.5C18 11.67 17.33 11 16.5 11C15.67 11 15 11.67 15 12.5C15 13.33 15.67 14 16.5 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSkullFill;
