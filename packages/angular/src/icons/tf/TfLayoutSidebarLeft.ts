import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-sidebar-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutSidebarLeft {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0h5v17h-5v-17zM7 17h1v-1h-1v1zM14.22 17h0.89v-1h-0.89v1zM12.44 17h0.89v-1h-0.89v1zM8.89 17h0.89v-1h-0.89v1zM10.67 17h0.89v-1h-0.89v1zM16 17h1v-1h-1v1zM16 3h1v-1h-1v1zM16 15h1v-1h-1v1zM16 7h1v-1h-1v1zM16 5h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 0v1h1v-1h-1zM14.22 1h0.89v-1h-0.89v1zM12.45 1h0.89v-1h-0.89v1zM10.67 1h0.89v-1h-0.89v1zM8.89 1h0.89v-1h-0.89v1zM7 1h1v-1h-1v1zM7 15h1v-1h-1v1zM7 13h1v-1h-1v1zM7 7h1v-1h-1v1zM7 11h1v-1h-1v1zM7 5h1v-1h-1v1zM7 3h1v-1h-1v1zM7 9h1v-1h-1v1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutSidebarLeft;
