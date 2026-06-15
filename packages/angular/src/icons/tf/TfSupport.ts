import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-support",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfSupport {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.38 3c-0.94-1.83-2.8-3-4.88-3s-3.95 1.17-4.88 3h-3.62v13h17v-13h-3.62zM8.5 1c1.52 0 2.91 0.77 3.73 2h-7.46c0.83-1.23 2.21-2 3.73-2zM16 15h-15v-11h15v11zM8 10h-2v-1h2v-2h1v2h2v1h-2v2h-1v-2z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfSupport;
