import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-send",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSend {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m4 8.25 7.51 1-7.5-3.22zm0.01 9.72 7.5-3.22-7.51 1z","opacity":".3"}],["path",{"d":"M2.01 3 2 10l15 2-15 2 0.01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm0.01 9.72v-2.22l7.51-1-7.51 3.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSend;
