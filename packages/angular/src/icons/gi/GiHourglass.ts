import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hourglass",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHourglass {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M92.66 19.19v41.5h331.72v-41.5H92.66zM119.5 79.37V433.53h22.28V79.38H119.5zm46.59 0c3.21 43.32 13.31 82.02 27.78 110.91 17.68 35.3 40.85 54.75 64.06 54.75 23.22 0 46.35-19.45 64.03-54.75 14.47-28.88 24.57-67.58 27.78-110.9H166.09zm209.16 0V433.53h22.28V79.38h-22.28zm-117.31 185.22c-23.22 0-46.38 19.42-64.06 54.72-14.83 29.61-25.1 69.56-28.03 114.22H350c-2.93-44.66-13.2-84.61-28.03-114.22-17.69-35.3-40.81-54.72-64.03-54.72zM92.66 452.22v41.47h331.72V452.22H92.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHourglass;
