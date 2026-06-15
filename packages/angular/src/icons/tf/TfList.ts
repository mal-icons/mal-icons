import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfList {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 4v1h-12v-1h12zM3 4.5c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5zM2 4.5c0-0.28-0.22-0.5-0.5-0.5s-0.5 0.23-0.5 0.5 0.22 0.5 0.5 0.5 0.5-0.22 0.5-0.5zM5 9h12v-1h-12v1zM3 8.5c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5zM2 8.5c0-0.28-0.22-0.5-0.5-0.5s-0.5 0.23-0.5 0.5 0.22 0.5 0.5 0.5 0.5-0.22 0.5-0.5zM5 13h12v-1h-12v1zM3 12.5c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5zM2 12.5c0-0.28-0.22-0.5-0.5-0.5s-0.5 0.23-0.5 0.5 0.22 0.5 0.5 0.5 0.5-0.22 0.5-0.5z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfList;
