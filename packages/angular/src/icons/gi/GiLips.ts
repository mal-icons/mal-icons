import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lips",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLips {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M166.84 112.34c-42.01 38.55-97.81 75.02-147.53 86.03 39.1 14.38 89.04 18.72 134.72 9.16 53.26 31.33 128.1 32.19 184.88 0 44.99 15.3 96.35 13.18 149.69-9.31-59.56-9.61-125-51.59-155.25-85.88-55.5 39.62-111 32.15-166.5 0zm-133.72 114.03c17.33 29.57 48.47 79.25 89.75 131.06 27.24 34.19 76.61 31.09 129.97 31.09 49.3 0 102.290.71 127.63-31.09 37.72-47.35 68.59-92.14 88.22-122-124.87 84.53-316.77 93.18-435.56-9.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLips;
