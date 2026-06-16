import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-view-agenda",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtViewAgenda {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5h14v4H5zm0 10h14v4H5z","opacity":".3"}],["path",{"d":"M19 13H5c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2zm0 6H5v-4h14v4zm0-16H5c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 6H5V5h14v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtViewAgenda;
