import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-yolo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiYolo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.25 0c-3.05 0-5.52 2.48-5.52 5.52 0 3.84-3.12 6.97-6.97 6.97-1.51 0-2.89-0.46-4.03-1.26 1.11 1.98 2.77 3.6 4.76 4.67v2.51c0 3.04 2.43 5.56 5.46 5.59 3.07 0 5.58-2.46 5.58-5.52V15.9c3.64-1.96 6.16-5.8 6.23-10.21v-0.16C23.76 2.48 21.28 0 18.25 0ZM5.760C2.7200.24 2.480.24 5.52c0 3.04 2.48 5.52 5.52 5.52 3.04 0 5.51-2.47 5.51-5.52 0-3.05-2.47-5.52-5.51-5.52Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiYolo;
