import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-queue-play-next",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtQueuePlayNext {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 15v-3h3v-2h-3V7h-2v3H8v2h3v3zm5 0 3 3-3 3 1.5 1.5L24 18l-4.5-4.5zM8 19v2h8v-2h2v-2H3V5h18v8h2V5a2 2 0 0 0-2-2H3c-1.11 0-2 0.89-2 2v12a2 2 0 0 0 2 2h5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtQueuePlayNext;
