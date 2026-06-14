import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-ellipsis-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcEllipsis24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 9.75v5.5A1.75 1.75 0 0 1 20.25 17H3.75A1.75 1.75 0 0 1 2 15.25v-5.5C2 8.78 2.78 8 3.75 8h16.5c0.97 0 1.750.78 1.75 1.75Zm-8.75 2.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm-6.5 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm10.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcEllipsis24;
