import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-add-to-queue",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAddToQueue {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 17h18V5H3v12zm5-7h3V7h2v3h3v2h-3v3h-2v-3H8v-2z","opacity":".3"}],["path",{"d":"M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zM21 3H3c-1.11 0-2 0.89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 2-0.9 2-2V5a2 2 0 0 0-2-2zm0 14H3V5h18v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAddToQueue;
