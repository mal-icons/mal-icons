import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-nigeria",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiNigeria {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M30.52 255.4c-1.39 3.5-5.53 106.7-5.53 106.7 67.84-21.2 94.51 11.1 126.61 80.6l100.5-14.4c36.3-100.2 67.8-102.3 97.7-70.2l19.1-1.5c16.1-49.4 47.7-113.8 84.9-183.8l33.2-16.4-13.9-29.9-44.4-55.69-32.2 26.57c-57-27.75-83.6-9.7-107.6 12.32-39.6-27.24-72.1-27.53-99.3-7.6-10.3-42.07-109.81-47.48-111.94 6.2-23.71 12.7-18.2 37.4-22.84 58 13.01 32.7 2.4 58.3-24.3 89.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiNigeria;
