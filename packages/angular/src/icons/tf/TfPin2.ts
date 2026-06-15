import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-pin2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfPin2 {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 11.5h1v5.5h-1v-5.5zM14 8.8v2.2h-11v-2.2l1.09-0.49 1.11-6.31-0.43-0.78-0.67-1.22h8.8l-0.67 1.22-0.43 0.78 1.11 6.31 1.09 0.49zM13 9.45l-0.99-0.44-0.09-0.52-1.17-6.66 0.17-0.31 0.28-0.52h-5.42l0.46 0.83-0.06 0.35-1.2 6.84-0.99 0.44v0.55h9v-0.55z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfPin2;
