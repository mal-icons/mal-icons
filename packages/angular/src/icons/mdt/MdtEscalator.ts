import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-escalator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtEscalator {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 5v14H5V5h14m-2 1h-3.3l-5 9H7c-0.83 0-1.50.67-1.5 1.5S6.17 18 7 18h3.3l5-9H17c0.83 0 1.5-0.67 1.5-1.5S17.83 6 17 6z","opacity":".3"}],["path",{"d":"M19 5v14H5V5h14m0-2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-2 3h-3.3l-5 9H7c-0.83 0-1.50.67-1.5 1.5S6.17 18 7 18h3.3l5-9H17c0.83 0 1.5-0.67 1.5-1.5S17.83 6 17 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtEscalator;
