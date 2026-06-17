import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-mountaintop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMountaintop {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M253.81 14.47c-132.54 0-240.19 107.65-240.19 240.19 0 132.54 107.65 240.16 240.19 240.16C386.35 494.81 494 387.19 494 254.66S386.35 14.47 253.81 14.47zm0 18.69c122.44 0 221.5 99.06 221.5 221.5 0 17.96-2.13 35.41-6.16 52.13l-44.91-8.69-20.53-71.59-1.38-4.84-4.84-1.5-58.06-17.94-66.91-128.63-4.75-9.16-8.65 5.62-91.09 59.25-2.94 1.91-0.97 3.37L116.19 301.97l-70.22 29.44c-8.82-23.91-13.66-49.75-13.66-76.75 0-122.44 99.06-221.5 221.5-221.5zm0.81 62.13l-52.53 104.6 16.22 134.44 90.13-61.94v62.97l-23.56 6.25L305.72 470.03c-16.65 3.99-34.03 6.1-51.91 6.1-88.81 0-165.33-52.12-200.66-127.47l74.41-31.22 4.13-1.72 1.25-4.31 48.19-168.28 73.5-47.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMountaintop;
