import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSly {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M23.56 75.28C17.71 179.53 82.54 207.69 181.88 198.69 158.46 135.47 111.86 89.69 23.56 75.28zm474.63 0c-88.29 14.41-134.89 60.19-158.31 123.41 99.33 9 164.16-19.16 158.31-123.41zM55.03 283.53c20.28 35.91 40.59 66.53 60.91 91.88 96.78 28.22 194.46 26.48 293.41-1.31 19.38-25.14 38.59-55.33 57.59-90.56-121.66 108.32-286.12 103.46-411.91 0zM389.41 398.19c-84.6 20.15-168.75 21.63-252.22 1.81 85.11 90.85 170.07 89.54 252.22-1.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSly;
