import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-pencil-alt2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfPencilAlt2 {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.49 0h-1.98c-0.83 0-1.5 0.67-1.5 1.5v10.66l2.52 4.96 2.46-4.96v-10.65c0-0.83-0.67-1.5-1.5-1.5zM7.51 1h1.98c0.28 0 0.5 0.23 0.5 0.5v1.02h-2.98v-1.02c0-0.28 0.22-0.5 0.5-0.5zM8.08 14.02l-0.93-1.83h2.72l-0.91 1.84h-0.87zM7.01 11.19v-5.64h2.98v5.64h-2.98zM7.01 4.55v-1.03h2.98v1.03h-2.98z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfPencilAlt2;
