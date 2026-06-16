import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-handshake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHandshake {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M474-40 93-421l303-303 146 146 42-42-240-240L41-557l73 73-42 42-116-116 387-387 124 124 124-124 394 394L474-40Zm1-84 425-427-309-309-81 81 159 159-127 127-146-146-218 218 42 42 163-163 43 43-163 163 43 43 163-163 42 42-163 163 41 41 163-163 43 43-163 163 43 43ZM362-651Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHandshake;
