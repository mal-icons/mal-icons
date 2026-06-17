import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-nuclear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiNuclear {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 31c-26.5 0-79.5 26.92-79.5 53.84S203 165.62 256 219.47c53-53.85 79.5-107.7 79.5-134.63C335.5 57.92 282.5 31 256 31zm1.53 215.41A53 53.85 0 0 0 203 300.25a53 53.85 0 0 0 106 0 53 53.85 0 0 0-51.47-53.84zm-166.15 80.47c-26.70.12-47.24 4.39-58.72 11.12-22.95 13.46-19.37 73.56-6.12 96.88 13.25 23.32 62.68 56.49 85.63 43.03 22.95-13.46 55.6-63.72 75-137.28-36.2-9.85-69.08-13.87-95.78-13.75zm329.25 0c-26.7-0.12-59.58 3.89-95.78 13.75 19.4 73.56 52.05 123.82 75 137.28 22.95 13.46 72.38-19.71 85.62-43.03 13.25-23.32 16.82-83.41-6.13-96.88-11.47-6.73-32.01-11-58.72-11.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiNuclear;
