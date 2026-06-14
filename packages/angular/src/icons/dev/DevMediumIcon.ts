import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-medium-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMediumIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M169.2 129.6c93.5 0 169.2 76.3 169.2 170.4s-75.7 170.4-169.2 170.4A170 170 0 0 1 0 300c0-94 75.8-170.4 169.2-170.4m270.3 10c46.7 0 84.6 71.8 84.6 160.4s-38 160.4-84.6 160.4c-46.8 0-84.6-71.8-84.6-160.4s37.8-160.4 84.6-160.4m130.7 16.7c16.5 0 29.8 64.3 29.8 143.7s-13.3 143.7-29.8 143.7c-16.4 0-29.7-64.3-29.7-143.7s13.3-143.7 29.7-143.7"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMediumIcon;
