import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfHeart {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 0.66c-1.74 0-3.25 0.99-4 2.44-0.75-1.45-2.26-2.44-4-2.44-2.48 0-4.5 2.02-4.5 4.5 0 0.34 0.05 0.7 0.15 1.12l0.11 0.35c1.43 4.35 7.66 9.39 7.92 9.6l0.31 0.25 0.31-0.25c0.28-0.23 6.93-5.6 7.93-9.61l0.11-0.37c0.1-0.4 0.15-0.75 0.15-1.09 0-2.48-2.02-4.5-4.5-4.5zM15.89 5.98l-0.11 0.37c-0.81 3.25-5.95 7.73-7.28 8.84-1.28-1.08-6.12-5.34-7.28-8.87l-0.1-0.32c-0.08-0.31-0.11-0.59-0.11-0.85 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v0.25h1v-0.25c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 0.26-0.04 0.53-0.11 0.82z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfHeart;
