import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-world",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfWorld {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.52 0c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5zM1.04 9h2.94c0.04 1.02 0.21 2.03 0.51 3h-2.6c-0.48-0.91-0.78-1.92-0.85-3zM3.98 8h-2.94c0.07-1.08 0.37-2.09 0.85-3h2.6c-0.3 0.97-0.47 1.98-0.51 3zM5.55 5h5.9c0.33 0.97 0.52 1.97 0.57 3h-7.03c0.05-1.03 0.24-2.03 0.57-3zM4.98 9h7.04c-0.05 1.03-0.24 2.04-0.57 3h-5.89c-0.33-0.96-0.52-1.97-0.57-3zM13.01 9h2.98c-0.07 1.08-0.37 2.09-0.85 3h-2.64c0.3-0.97 0.47-1.98 0.51-3zM13.01 8c-0.04-1.02-0.21-2.03-0.51-3h2.64c0.48 0.91 0.78 1.92 0.85 3h-2.98zM14.5 4h-2.35c-0.39-0.95-0.92-1.86-1.55-2.7 1.58 0.46 2.94 1.42 3.9 2.7zM9.07 1.03c0.82 0.9 1.48 1.9 1.97 2.97h-5.1c0.49-1.07 1.15-2.07 1.97-2.97 0.2-0.01 0.4-0.03 0.6-0.03 0.19 0 0.37 0.02 0.56 0.03zM6.38 1.31c-0.63 0.84-1.15 1.74-1.54 2.69h-2.31c0.96-1.27 2.3-2.22 3.85-2.69zM2.53 13h2.32c0.39 0.95 0.92 1.85 1.55 2.69-1.56-0.46-2.91-1.42-3.86-2.69zM7.93 15.97c-0.83-0.9-1.49-1.9-1.98-2.97h5.09c-0.49 1.07-1.15 2.08-1.98 2.97-0.18 0.01-0.36 0.03-0.55 0.03-0.2 0-0.39-0.01-0.59-0.03zM10.59 15.7c0.64-0.84 1.16-1.75 1.56-2.7h2.36c-0.97 1.28-2.33 2.25-3.91 2.7z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfWorld;
