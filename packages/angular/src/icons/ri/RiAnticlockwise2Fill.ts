import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-anticlockwise-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAnticlockwise2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 4H16C18.76 4 21 6.24 21 9V13H19V9C19 7.34 17.66 6 16 6H14V9L9 5L14 1V4ZM15 11V21C15 21.55 14.55 22 14 22H4C3.45 22 3 21.55 3 21V11C3 10.45 3.45 10 4 10H14C14.55 10 15 10.45 15 11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAnticlockwise2Fill;
