import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-sidebar-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutSidebarRight {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 0v17h-5v-17h5zM9 17h1v-1h-1v1zM7.22 17h0.89v-1h-0.89v1zM1.89 17h0.89v-1h-0.89v1zM3.67 17h0.89v-1h-0.89v1zM5.45 17h0.89v-1h-0.89v1zM0 17h1v-1h-1v1zM0 9h1v-1h-1v1zM0 3h1v-1h-1v1zM0 11h1v-1h-1v1zM0 7h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 5h1v-1h-1v1zM0 1h1v-1h-1v1zM8.11 0h-0.89v1h0.89v-1zM6.33 0h-0.89v1h0.89v-1zM2.78 0h-0.89v1h0.89v-1zM4.56 0h-0.89v1h0.89v-1zM9 1h1v-1h-1v1zM9 15h1v-1h-1v1zM9 13h1v-1h-1v1zM9 9h1v-1h-1v1zM9 11h1v-1h-1v1zM9 5h1v-1h-1v1zM9 7h1v-1h-1v1zM9 3h1v-1h-1v1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutSidebarRight;
