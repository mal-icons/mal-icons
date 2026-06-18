import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-prohibited-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiProhibitedFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.74 18.33C21.15 16.6 22 14.4 22 12C22 6.48 17.52 2 12 2C9.6 2 7.4 2.85 5.67 4.26L19.74 18.33ZM4.26 5.67C2.85 7.4 2 9.6 2 12C2 17.52 6.48 22 12 22C14.4 22 16.6 21.15 18.33 19.74L4.26 5.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiProhibitedFill;
