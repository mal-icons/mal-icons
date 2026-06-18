import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-file-html",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsFileHtml {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4zM8.53 18h-0.76v-1.41H6.52V18h-0.77v-3.37h0.77v1.3h1.26v-1.3h0.76V18zm3-2.73h-0.92V18h-0.77v-2.73h-0.9v-0.64h2.59v0.64zM14.82 18l-0.05-1.29c-0.02-0.4-0.03-0.9-0.03-1.39h-0.02c-0.10.43-0.240.91-0.37 1.31l-0.41 1.32h-0.6l-0.36-1.31a15.15 15.15 0 0 1-0.31-1.32h-0.01c-0.020.46-0.030.98-0.06 1.4L12.55 18h-0.7l0.22-3.37h1.01l0.33 1.13c0.10.390.210.810.28 1.21h0.02c0.1-0.390.21-0.840.32-1.21l0.36-1.12h1L15.56 18h-0.74zm3.43 0h-2.11v-3.37h0.77v2.73h1.34V18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsFileHtml;
