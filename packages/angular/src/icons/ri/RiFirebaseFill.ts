import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-firebase-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFirebaseFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.76 1.5L4 18.5L4 18.5L9.47 4.82L7.69 1.35C7.47 0.92 6.83 1.02 6.76 1.5ZM11.56 4.32L4 18.5L4 18.5L13.84 6.95L12.44 4.33C12.25 3.98 11.76 3.97 11.56 4.32ZM10.94 22.84L4 18.5L17.31 5.67C17.6 5.4 18.08 5.56 18.14 5.96L20 18.5L13.06 22.84C12.41 23.24 11.59 23.24 10.94 22.84Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFirebaseFill;
