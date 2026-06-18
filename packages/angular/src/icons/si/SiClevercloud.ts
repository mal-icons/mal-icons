import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-clevercloud",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiClevercloud {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.82 11.14 11.25 0 1.61 5.57zM1.24 6.65v10.71L4.33 12zM12 23.57l6.43-11.14H5.57zM12 0.43 5.57 11.57h12.86zm10.76 16.92V6.65L19.67 12zm00.86-0.370.22-3.21-5.57L12.75 24zm0-12.43L12.75 0l6.43 11.14 3.22-5.57zM1.24 18.22 11.25 24l-6.43-11.14-3.22 5.57z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiClevercloud;
