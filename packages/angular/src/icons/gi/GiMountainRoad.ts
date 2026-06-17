import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-mountain-road",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMountainRoad {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M149 24.32L123 124.4l27.8 44.8 15.9-29.4 37.5 30.9 17.5-55.5zm169.7 43.7l-32.2 48.38 10.7 25.5 21.9-21.7 18.1 42.8 10.3-21.7zm-83.4 64.18l-21.9 69.3-41.3-33.9L152 205l-35.2-56.7-88.38 339.4H154.9c45.6-17 135.3-56.7 137.2-106.3 1.7-47.8-108.9-43.4-110.8-91.2-1.5-39.1 84.5-81.5 84.5-81.5s-54.1 43.3-47.4 71c12.9 53 125.6 27.6 143.2 79.3 13 38.2-33.5 104.3-52.2 128.7h174.2L356.5 164.3 336.4 207l-23.5-55.4-22.1 21.9-16.3-39.1-17 25.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMountainRoad;
