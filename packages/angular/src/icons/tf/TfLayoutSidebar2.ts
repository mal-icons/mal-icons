import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-sidebar-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutSidebar2 {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 0v17h-4v-17h4zM0 17h3v-17h-3v17zM11 17h1v-1h-1v1zM7.57 17h0.86v-1h-0.86v1zM9.29 17h0.86v-1h-0.86v1zM5.86 17h0.86v-1h-0.86v1zM4 17h1v-1h-1v1zM4 3h1v-1h-1v1zM4 13h1v-1h-1v1zM4 15h1v-1h-1v1zM4 11h1v-1h-1v1zM4 7h1v-1h-1v1zM4 5h1v-1h-1v1zM4 9h1v-1h-1v1zM4 1h1v-1h-1v1zM5.86 1h0.86v-1h-0.86v1zM9.29 1h0.86v-1h-0.86v1zM7.57 1h0.86v-1h-0.86v1zM11 1h1v-1h-1v1zM11 5h1v-1h-1v1zM11 3h1v-1h-1v1zM11 7h1v-1h-1v1zM11 9h1v-1h-1v1zM11 15h1v-1h-1v1zM11 13h1v-1h-1v1zM11 11h1v-1h-1v1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutSidebar2;
