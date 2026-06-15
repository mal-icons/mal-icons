import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfKey {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.81 6.3l0.71-0.71-1.73-1.73 0.76-0.75-0.7-0.71-8.15 8.11c-0.48-0.34-1.07-0.53-1.7-0.53-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-0.66-0.22-1.27-0.58-1.76l5.26-5.24 1.74 1.74 0.71-0.71-1.74-1.74 0.7-0.7 1.74 1.74zM3.99 14.97c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfKey;
