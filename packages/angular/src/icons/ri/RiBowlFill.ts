import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bowl-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBowlFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 1.5C8 0.95 7.55 0.5 7 0.5C6.45 0.5 6 0.95 6 1.5V2.5C6 2.51 6 2.51 6 2.52C6 2.56 6.01 2.58 5.79 2.79L5.77 2.81C5.51 3.08 5 3.58 5 4.5V5.5C5 6.05 5.45 6.5 6 6.5C6.55 6.5 7 6.05 7 5.5V4.5C7 4.49 7 4.49 7 4.48C7 4.44 6.99 4.42 7.21 4.21L7.23 4.19C7.49 3.92 8 3.42 8 2.5V1.5ZM2 9C2 8.45 2.45 8 3 8H21C21.55 8 22 8.45 22 9V10C22 14.1 19.53 17.62 16 19.17V20C16 20.55 15.55 21 15 21H9C8.45 21 8 20.55 8 20V19.17C4.47 17.62 2 14.1 2 10V9ZM18 0.5C18.55 0.5 19 0.95 19 1.5V2.5C19 3.42 18.49 3.92 18.23 4.19L18.21 4.21C17.99 4.42 18 4.44 18 4.48C18 4.49 18 4.49 18 4.5V5.5C18 6.05 17.55 6.5 17 6.5C16.45 6.5 16 6.05 16 5.5V4.5C16 3.58 16.51 3.08 16.77 2.81L16.79 2.79C17.01 2.58 17 2.56 17 2.52C17 2.51 17 2.51 17 2.5V1.5C17 0.95 17.45 0.5 18 0.5ZM13.5 1.5C13.5 0.95 13.05 0.5 12.5 0.5C11.95 0.5 11.5 0.95 11.5 1.5V2.5C11.5 2.51 11.5 2.51 11.5 2.52C11.5 2.56 11.51 2.58 11.29 2.79L11.27 2.81C11.01 3.08 10.5 3.58 10.5 4.5V5.5C10.5 6.05 10.95 6.5 11.5 6.5C12.05 6.5 12.5 6.05 12.5 5.5V4.5C12.5 4.49 12.5 4.49 12.5 4.48C12.5 4.44 12.49 4.42 12.71 4.21L12.73 4.19C12.99 3.92 13.5 3.42 13.5 2.5V1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBowlFill;
