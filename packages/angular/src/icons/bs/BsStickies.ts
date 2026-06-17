import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-stickies",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsStickies {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a0.50.5 0 0 1 0.5-0.5H14a1 1 0 0 0-1-1z"}],["path",{"d":"M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.09a1.5 1.5 0 0 0 1.06-0.44l4.92-4.91A1.5 1.5 0 0 0 16 9.59V3.5A1.5 1.5 0 0 0 14.5 2zM3 3.5a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0.50.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a0.50.5 0 0 1-0.5-0.5zm7 11.29V10.5a0.50.5 0 0 1 0.5-0.5h4.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsStickies;
