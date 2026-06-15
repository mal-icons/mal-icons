import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-unlock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfUnlock {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 10.97c0 0.37-0.21 0.67-0.5 0.85v2.15h-1v-2.15c-0.29-0.17-0.5-0.48-0.5-0.85 0-0.55 0.45-1 1-1 0.55 0 1 0.45 1 1zM14.99 8.46v7.08c0 0.83-0.67 1.5-1.5 1.5h-9.99c-0.83 0-1.5-0.67-1.5-1.5v-7.08c0-0.83 0.67-1.5 1.5-1.5h8.99v-1.99c0-2.21-1.79-4-4-4s-4 1.79-4 4h-1c0-2.76 2.24-5 5-5s5 2.24 5 5v1.99c0.82 0 1.49 0.68 1.49 1.5zM13.99 8.46c0-0.28-0.22-0.5-0.5-0.5h-9.99c-0.28 0-0.5 0.22-0.5 0.5v7.08c0 0.28 0.23 0.5 0.5 0.5h9.99c0.28 0 0.5-0.22 0.5-0.5v-7.08z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfUnlock;
