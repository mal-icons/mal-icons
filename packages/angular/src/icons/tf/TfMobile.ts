import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-mobile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfMobile {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 0h-8c-0.83 0-1.5 0.67-1.5 1.5v14c0 0.83 0.67 1.5 1.5 1.5h8c0.83 0 1.5-0.67 1.5-1.5v-14c0-0.83-0.67-1.5-1.5-1.5zM4.5 1h8c0.28 0 0.5 0.22 0.5 0.5v1.5h-9v-1.5c0-0.28 0.22-0.5 0.5-0.5zM13 4v8h-9v-8h9zM12.5 16h-8c-0.28 0-0.5-0.22-0.5-0.5v-2.5h9v2.5c0 0.28-0.22 0.5-0.5 0.5zM9 14.5c0 0.28-0.22 0.5-0.5 0.5s-0.5-0.22-0.5-0.5 0.22-0.5 0.5-0.5 0.5 0.22 0.5 0.5z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfMobile;
