import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-omega",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiOmega {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M259.05 73.11C155.53 73.11 71.2 163.14 71.2 274.65c0 42.67 12.27 82.82 33.27 115.45-24.44-13.23-48.45-29.26-72.4-48.92v95.11H206.87c-48-33.26-81.53-82.23-81.53-138.16 0-74.57 59.88-135.01 133.71-135.01 73.83 0 133.71 60.45 133.71 135.01 0 55.93-33.53 104.9-81.53 138.16h174.8V341.18c-24.02 19.86-48.29 36.2-73.05 49.57 21.3-32.77 33.92-73.09 33.92-116.1 0-111.51-84.33-201.54-187.85-201.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiOmega;
