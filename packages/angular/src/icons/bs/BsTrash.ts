import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-trash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTrash {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 5.5A0.50.5 0 0 1 6 6v6a0.50.5 0 0 1-1 0V6a0.50.5 0 0 1 0.5-0.5m2.5 0a0.50.5 0 0 1 0.50.5v6a0.50.5 0 0 1-1 0V6a0.50.5 0 0 1 0.5-0.5m3 0.5a0.50.5 0 0 0-1 0v6a0.50.5 0 0 0 1 0z"}],["path",{"d":"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-0.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.12 4 4 4.06V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.06L11.88 4zM2.5 3h11V2h-11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTrash;
