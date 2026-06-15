import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-cut",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfCut {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 11c-0.55 0-1.05 0.16-1.49 0.41l-2.32-2.45 6.26-6.61-0.73-0.69-6.22 6.57-6.22-6.57-0.73 0.69 6.26 6.61-2.32 2.45c-0.44-0.25-0.94-0.41-1.49-0.41-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-0.75-0.28-1.42-0.74-1.95l2.24-2.37 2.24 2.37c-0.45 0.53-0.74 1.2-0.74 1.95 0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3zM4 16c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM13 16c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfCut;
