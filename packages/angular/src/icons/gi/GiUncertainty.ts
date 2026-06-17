import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-uncertainty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiUncertainty {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M257.78 19.44c-127.920.02-231.75 103.86-231.75 231.78 0 55.73 19.71 106.78 52.53 146.72L57.75 434.09h132.41l-66.31-114.72-22.37 39c-20.9-30.48-33.06-67.44-33.06-107.15 0-104.52 84.85-189.38 189.38-189.38 104.52 0 189.41 84.85 189.41 189.38 0 39.11-11.68 75.66-32 105.87l-21.87-37.72L327 434.1h132.41l-21.59-37.47c32.23-39.78 51.75-90.25 51.75-145.4 0-127.93-103.83-231.77-231.75-231.78h-0.03zm-0.65 75.47c-49.53-0.05-110.47 29.23-128.41 104.94l60.75 14.31c26.97-76.24 90.87-70.82 113.31-28.62 26.78 50.35-89.69 107.28-84.12 190.41h77.69c6.49-98.14 118.97-123.49 59.56-229.53C337.96 114.38 301 96.57 261.88 95.03V95c-1.57-0.06-3.15-0.09-4.75-0.09zM258.5 395.97c-26.95 0-48.59 21.64-48.59 48.59 0 26.95 21.65 48.59 48.59 48.59 26.95 0 48.59-21.64 48.59-48.59 0-26.95-21.64-48.59-48.59-48.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiUncertainty;
