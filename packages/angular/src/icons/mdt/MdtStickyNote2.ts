import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-sticky-note-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtStickyNote2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5v14h9v-5h5V5H5zm7 9H7v-2h5v2zm5-4H7V8h10v2z","opacity":".3"}],["path",{"d":"M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h10l6-6V5c0-1.1-0.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtStickyNote2;
