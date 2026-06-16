import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-auto-awesome-motion",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAutoAwesomeMotion {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12h8v8h-8z","opacity":".3"}],["path",{"d":"M14 2H4c-1.1 0-2 0.9-2 2v10h2V4h10V2zm6 8h-8c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2zm0 10h-8v-8h8v8z"}],["path",{"d":"M18 6H8c-1.1 0-2 0.9-2 2v10h2V8h10V6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAutoAwesomeMotion;
