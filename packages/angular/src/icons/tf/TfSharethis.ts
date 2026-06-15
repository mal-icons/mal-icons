import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-sharethis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfSharethis {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 13.17c0 1.84-1.49 3.33-3.33 3.33-1.84 0-3.33-1.49-3.33-3.33 0-0.12 0.01-0.24 0.02-0.35l-3.75-1.88c-0.59 0.55-1.4 0.9-2.27 0.9-1.84 0-3.33-1.49-3.33-3.33 0-1.84 1.49-3.33 3.33-3.33 0.88 0 1.68 0.34 2.27 0.9l3.75-1.87c-0.01-0.12-0.02-0.24-0.02-0.35 0-1.84 1.49-3.33 3.33-3.33 1.84 0 3.33 1.49 3.33 3.33 0 1.84-1.49 3.33-3.33 3.33-0.87 0-1.68-0.34-2.27-0.9l-3.75 1.88c0.01 0.12 0.02 0.24 0.02 0.35 0 0.12-0.01 0.24-0.02 0.35l3.75 1.88c0.59-0.55 1.4-0.9 2.27-0.9 1.840 3.33 1.49 3.33 3.33z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfSharethis;
