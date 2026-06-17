import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lob-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLobArrow {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M269.03 14.47c-110.47 1.83-290.75 92.88-243.5 450.5 0-210.67 118.63-315.63 181.81-315.63 41.72 0 70.6 34.95 73.81 102.75h-40.59l7.22 13.69 114.94 218.28 8.25 15.69 8.28-15.69 114.94-218.28 7.22-13.69H441.97C438.38 104.61 361.12 15.24 274.25 14.47c-1.72-0.02-3.46-0.03-5.22 0zm-4.59 44.59c85.56-1.12 146.17 75.67 148.69 211.72h57.31L371 459.66 271.53 270.78h65.6c-2.32-140.21-60.25-201.84-171.72-180.25 35.16-20.85 68.67-31.07 99.03-31.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLobArrow;
