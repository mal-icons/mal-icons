import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-switzerland",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSwitzerland {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M36.2 295.21c11.48-39.19 64.37-91.15 97.16-138.63 61.77-28.66 90.45 2 158.84-53.99 43.31 14.1 84.51 31.63 114.28 49.59l-17.8 56.11c32.89 14.68 63.74 35.79 105.87 21.44-3.35 42.22 11.43 74.85-43.66 108.59-21.82-9.83-58.49-8.03-76.74-38.76-0.53 38.88-18.16 85.14-32.11 109.85-8.67-0.59-61.84-63.65-61.93-100.61-18.92 2.47-34.67 56.34-49.15 82.29l-92.23 13.53c-20.31-27.1-27.57-62.38-46.93-92.12-20.94-32.16-38.68 39.8-70.46 52.48-9.42-9.16-0.5-34.42 14.87-69.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSwitzerland;
