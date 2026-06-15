import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-email",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfEmail {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 2v13h17v-13h-17zM8.49 9.82l-6.9-6.82h13.82l-6.92 6.82zM5.76 8.52l-4.75 4.68v-9.38l4.76 4.7zM6.47 9.22l2.03 2 2-1.97 4.8 4.74h-13.68l4.86-4.78zM11.2 8.56l4.8-4.72v9.47l-4.8-4.74z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfEmail;
