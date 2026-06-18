import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-prohibited-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiProhibited2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.26 18.33C2.85 16.6 2 14.4 2 12C2 6.48 6.48 2 12 2C14.4 2 16.6 2.85 18.33 4.26L4.26 18.33ZM19.74 5.67C21.15 7.4 22 9.6 22 12C22 17.52 17.52 22 12 22C9.6 22 7.4 21.15 5.67 19.74L19.74 5.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiProhibited2Fill;
