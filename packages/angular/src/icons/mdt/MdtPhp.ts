import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-php",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPhp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zm-5 1.5v1c0 0.8-0.7 1.5-1.5 1.5h-2v2H3V9h3.5c0.8 0 1.50.7 1.5 1.5zm-1.5 0h-2v1h2v-1zm15 0v1c0 0.8-0.7 1.5-1.5 1.5h-2v2h-1.5V9H20c0.8 0 1.50.7 1.5 1.5zm-1.5 0h-2v1h2v-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPhp;
