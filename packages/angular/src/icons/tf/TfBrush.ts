import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-brush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfBrush {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.91 1.78l-6.5 9.5-0.82-0.56 6.5-9.5 0.83 0.56zM9 13.99c0 1.1-0.9 2-2 2-0.2 0-0.54 0.02-0.54 0.02h-5.45l4.55-3.43c0.15-0.1 0.86-0.58 1.44-0.58 1.1 0 2 0.9 2 2zM8 13.99c0-0.55-0.45-1-1-1-0.17 0-0.58 0.2-0.85 0.39l-2.15 1.62h2.43c0.060 0.38-0.02 0.57-0.02 0.55 0 1-0.45 1-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfBrush;
