import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-note-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNoteAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.59 2.59c-0.38-0.38-0.89-0.59-1.42-0.59H6c-1.1 0-2 0.9-2 2v16c0 1.10.89 2 1.99 2H18c1.1 0 2-0.9 2-2V8.83c0-0.53-0.21-1.04-0.59-1.41l-4.82-4.83zM15 16h-2v2c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2H9c-0.55 0-1-0.45-1-1s0.45-1 1-1h2v-2c0-0.550.45-1 1-1s1 0.45 1 1v2h2c0.55 0 1 0.45 1 1s-0.45 1-1 1zm-2-8V3.5L18.5 9H14c-0.55 0-1-0.45-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNoteAdd;
