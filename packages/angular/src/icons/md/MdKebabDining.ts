import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-kebab-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdKebabDining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.75 7h0.75a2.5 2.5 0 0 0 0-5h-0.75V1h-1.5v1h-0.75a2.5 2.5 0 0 0 0 5h0.75v1H13v5h3.25v1h-0.75a2.5 2.5 0 0 0 0 5h0.75v4h1.5v-4h0.75a2.5 2.5 0 0 0 0-5h-0.75v-1H21V8h-3.25V7zM15.5 5c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h3c0.28 0 0.50.220.50.5s-0.220.5-0.50.5h-3zm3 11c0.28 0 0.50.220.50.5s-0.220.5-0.50.5h-3c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h3zm0.5-6v1h-4v-1h4zM7.75 7h0.75a2.5 2.5 0 0 0 0-5h-0.75V1h-1.5v1H5.5a2.5 2.5 0 0 0 0 5h0.75v1H3v5h3.25v1H5.5a2.5 2.5 0 0 0 0 5h0.75v4h1.5v-4h0.75a2.5 2.5 0 0 0 0-5h-0.75v-1H11V8H7.75V7zM5.5 5c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h3c0.28 0 0.50.220.50.5s-0.220.5-0.50.5h-3zm3 11c0.28 0 0.50.220.50.5s-0.220.5-0.50.5h-3c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h3zm0.5-6v1H5v-1h4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdKebabDining;
