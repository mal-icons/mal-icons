import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-ball-pen-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBallPenFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.85 11.81L17.14 11.1L7.24 21H3V16.75L14.31 5.44L19.97 11.1C20.36 11.49 20.36 12.12 19.97 12.51L12.9 19.58L11.49 18.17L17.85 11.81ZM18.56 2.61L21.38 5.44C21.78 5.83 21.78 6.46 21.38 6.86L19.97 8.27L15.73 4.03L17.14 2.61C17.53 2.22 18.17 2.22 18.56 2.61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBallPenFill;
