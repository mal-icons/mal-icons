import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-rewind",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsRewind {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.2 8 15 4.63v6.73zm-0.79-0.7a0.80.8 0 0 0 0 1.39l6.36 3.69c0.520.3 1.23-0.04 1.23-0.7V4.31c0-0.65-0.71-1-1.23-0.7z"}],["path",{"d":"M1.2 8 7 4.63v6.73zm-0.79-0.7a0.80.8 0 0 0 0 1.39l6.36 3.69c0.520.3 1.23-0.04 1.23-0.7V4.31c0-0.65-0.71-1-1.23-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsRewind;
