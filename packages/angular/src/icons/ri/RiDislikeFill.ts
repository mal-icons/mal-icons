import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dislike-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDislikeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.81 1.39L21.19 19.78L19.78 21.19L16.03 17.45L12 21.49L3.52 12.99C1.48 10.71 1.49 7.24 3.56 4.97L1.39 2.81L2.81 1.39ZM20.24 4.76C22.51 7.02 22.58 10.64 20.48 12.99L18.84 14.63L7.26 3.05C8.93 2.84 10.67 3.33 12 4.53C14.35 2.42 17.98 2.49 20.24 4.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDislikeFill;
