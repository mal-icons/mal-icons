import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-eye-target",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEyeTarget {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 105c-60.25 0-124.75 38.39-167.94 77.66-34.93 31.76-58.72 62.36-66.88 73.34 8.16 10.98 31.95 41.58 66.88 73.34C131.25 368.61 195.75 407 256 407s124.75-38.39 167.95-77.66c34.93-31.76 58.72-62.36 66.88-73.34-8.16-10.98-31.95-41.58-66.88-73.34C380.75 143.39 316.25 105 256 105zm0 23a128 128 0 0 1 63.49 16.97A48 48 0 0 0 288 190a48 48 0 0 0 0.020.45A72.36 72.36 0 0 0 265 183.58V160h-18v23.58c-33.03 4.1-59.33 30.39-63.42 63.42H160v18h23.58c4.1 33.03 30.39 59.33 63.42 63.42V352h18v-23.58c33.03-4.09 59.33-30.39 63.42-63.42H352v-18h-23.58a72.33 72.33 0 0 0-1.98-10.01A48 48 0 0 0 336 238a48 48 0 0 0 41.02-23.19A128 128 0 0 1 384 256a128 128 0 0 1-128 128 128 128 0 0 1-128-128 128 128 0 0 1 128-128zm-9 73.74V224h18v-22.26c23.24 3.79 41.47 22.03 45.26 45.26H288v18h22.26c-3.79 23.24-22.02 41.47-45.26 45.26V288h-18v22.26c-23.24-3.79-41.47-22.02-45.26-45.26H224v-18h-22.26c3.79-23.24 22.03-41.47 45.26-45.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEyeTarget;
