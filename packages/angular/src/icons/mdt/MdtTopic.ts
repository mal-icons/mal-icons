import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-topic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtTopic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 18H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z","opacity":".3"}],["path",{"d":"M20 6h-8l-2-2H4c-1.1 0-1.990.9-1.99 2L2 18c0 1.10.9 2 2 2h16.77c0.68 0 1.23-0.56 1.23-1.23V8c0-1.1-0.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtTopic;
