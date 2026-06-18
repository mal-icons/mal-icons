import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-percent-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPercentFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.5 21C15.57 21 14 19.44 14 17.5C14 15.57 15.57 14 17.5 14C19.44 14 21 15.57 21 17.5C21 19.44 19.44 21 17.5 21ZM6.5 10C4.57 10 3 8.44 3 6.5C3 4.57 4.57 3 6.5 3C8.44 3 10 4.57 10 6.5C10 8.44 8.44 10 6.5 10ZM19.08 3.52L20.49 4.93L4.93 20.49L3.52 19.07L19.08 3.52Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPercentFill;
