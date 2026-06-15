import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-trash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfTrash {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.94 2.02c-0.22-0.87-1-1.52-1.93-1.52-0.93 0-1.71 0.64-1.93 1.52h-3.57v1h11v-1h-3.56zM9 1.5c0.38 0 0.71 0.22 0.88 0.52h-1.73c0.17-0.3 0.49-0.52 0.86-0.52zM13 4h1v10.52c0 0.83-0.67 1.5-1.5 1.5h-7c-0.83 0-1.5-0.67-1.5-1.5v-10.52h1v10.52c0 0.28 0.22 0.5 0.5 0.5h7c0.28 0 0.5-0.22 0.5-0.5v-10.52zM8 5v8h-1v-8h1zM11 5v8h-1v-8h1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfTrash;
