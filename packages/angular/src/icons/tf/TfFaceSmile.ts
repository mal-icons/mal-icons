import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-face-smile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfFaceSmile {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 0c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5zM8.5 16c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zM13 9c0 2.48-2.02 4.5-4.5 4.5s-4.5-2.02-4.5-4.5c0-0.28 0.22-0.5 0.5-0.5s0.5 0.22 0.5 0.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-0.28 0.22-0.5 0.5-0.5s0.5 0.22 0.5 0.5zM4.5 5.5c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1zM10.5 5.5c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfFaceSmile;
