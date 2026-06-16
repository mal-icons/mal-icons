import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-note-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNoteAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H3v18h18V3zm-9-0.25c0.41 0 0.750.340.750.75s-0.340.75-0.750.75-0.75-0.34-0.75-0.750.34-0.750.75-0.75zM9.1 17H7v-2.14l5.96-5.96 2.12 2.12L9.1 17zm8.1-8.09-1.41 1.41-2.13-2.12 1.41-1.41 2.13 2.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNoteAlt;
